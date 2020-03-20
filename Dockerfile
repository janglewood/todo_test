FROM mhart/alpine-node:11 AS builder
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve

COPY --from=builder /build .
CMD ["serve", "-p", "3000", "-s", "."]