# --------------------
# Base image
# --------------------
FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache bash

WORKDIR /app


# --------------------
# Dependencies + Build
# --------------------
FROM base AS builder

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

# Copy workspace metadata
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy only frontend manifest first (for caching)
COPY frontend/package.json ./frontend/

# Install deps for the frontend (and its workspaces)
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
  pnpm install --frozen-lockfile --filter=frontend

# Copy source code
COPY frontend ./frontend

# Build the Next.js app
RUN pnpm frontend build

# Create production bundle (includes node_modules)
RUN pnpm deploy --filter=frontend --prod /app/deploy

# Copy Next.js build artifacts into deploy folder
RUN cp -r frontend/.next /app/deploy/.next && \
    cp -r frontend/public /app/deploy/public && \
    cp frontend/next.config.js /app/deploy/ || true


# --------------------
# Runtime image
# --------------------
FROM node:20-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

RUN apk add --no-cache vips-dev bash

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1 \
    SLS_TELEMETRY_DISABLED=1 \
    SLS_NOTIFICATIONS_MODE=off \
    DISABLE_OPENCOLLECTIVE=true \
    SEMGREP_SEND_METRICS=off \
    COLLECT_LEARNINGS_OPT_OUT=true \
    NODE_ENV=production

# Copy everything from deploy
COPY --from=builder /app/deploy ./

EXPOSE 3000
ENV PORT=3000

CMD ["pnpm", "start"]
