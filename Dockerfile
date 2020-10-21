# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile.multistage
FROM mhart/alpine-node AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["node_modules/.bin/next", "dev"]