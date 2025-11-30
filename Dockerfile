# Build stage
FROM node:25-alpine AS builder

# Build arguments
ARG MF1_URL=http://localhost:3001
ARG MF2_URL=http://localhost:3002

# Set as environment variables
ENV MF1_URL=$MF1_URL
ENV MF2_URL=$MF2_URL

# Install pnpm
RUN npm install -g pnpm@10.21.0

WORKDIR /app

# Copy all source files
COPY . .

# Remove any existing node_modules
RUN rm -rf node_modules apps/*/node_modules packages/*/node_modules

# Configure pnpm to use hoisted node_modules
RUN echo "node-linker=hoisted" > .npmrc

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build all apps
RUN pnpm build

# Production stage for mf1
FROM nginx:alpine AS mf1
COPY --from=builder /app/apps/mf1/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Production stage for mf2
FROM nginx:alpine AS mf2
COPY --from=builder /app/apps/mf2/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
