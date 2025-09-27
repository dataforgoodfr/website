# Creating multi-stage build for production
FROM node:22-alpine AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to install pnpm
RUN corepack enable
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Copy root workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy backend package.json separately
COPY backend/package.json ./backend/

# Install dependencies for backend only
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --filter=backend

# Copy backend package.json separately
COPY backend/package.json ./backend/

# Install dependencies for backend only
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --filter=backend

# Copy remaining source code
COPY . .

# Build backend
WORKDIR /opt/app/backend
RUN pnpm build

# Creating final production image
FROM node:22-alpine
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to install pnpm
RUN corepack enable
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
ENV PATH=/opt/app/node_modules/.bin:$PATH
WORKDIR /opt/app

# Copy node_modules from build stage
COPY --from=build /opt/app/node_modules ./node_modules

# Copy built backend and backend
COPY --from=build /opt/app/backend ./backend
COPY --from=build /opt/app/backend ./backend

# Set permissions and run as non-root
RUN chown -R node:node /opt/app
USER node
WORKDIR /opt/app/backend
EXPOSE 1337
CMD ["pnpm", "start"]
