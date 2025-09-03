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

# Build frontend package
RUN pnpm frontend build

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
ENV NEXT_TELEMETRY_DISABLED=1
ENV SLS_TELEMETRY_DISABLED=1
ENV SLS_NOTIFICATIONS_MODE=off
ENV DISABLE_OPENCOLLECTIVE=true
ENV SEMGREP_SEND_METRICS=off
ENV COLLECT_LEARNINGS_OPT_OUT=true
ENV NODE_ENV=production

# Enable health check
# HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:3000/api/health || exit 1

COPY --from=builder /app/frontend/.next/standalone/ /app/
COPY --from=builder /app/frontend/.next/static /app/frontend/.next/static
COPY --from=builder /app/frontend/public /app/frontend/public
COPY --from=builder /app/frontend/messages /app/frontend/messages

EXPOSE 3000
ENV PORT=3000

CMD ["node", "frontend/server.js"]
