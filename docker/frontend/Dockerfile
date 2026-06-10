# --------------------
# Base image
# --------------------
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to install pnpm
RUN corepack enable
RUN apk add --no-cache bash

WORKDIR /app


# --------------------
# Dependencies + Build
# --------------------
FROM base AS builder

# Add system build deps (for native packages)
RUN apk add --no-cache \
  build-base \
  autoconf \
  automake \
  gcc \
  zlib-dev \
  libpng-dev \
  vips-dev \
  nasm \
  git

# Copy dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/

# Install dependencies from root
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
  pnpm install --frozen-lockfile --filter=frontend

# Copy frontend package
COPY frontend ./frontend

# Build frontend with Vinext
RUN pnpm --filter frontend build:vinext

# --------------------
# Runtime image
# --------------------
FROM node:20-alpine AS runner

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

WORKDIR /app

# Enable corepack in case pnpm is needed at runtime (optional)
RUN corepack enable
RUN apk add --no-cache bash

# Remove telemetry
ENV NODE_ENV=production

# Copy Vinext standalone output
COPY --from=builder /app/frontend/dist/standalone /app

# Copy messages (already included in standalone via build script, but ensure they're present)
COPY --from=builder /app/frontend/messages /app/messages

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
