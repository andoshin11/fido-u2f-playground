FROM node:10.16.0-alpine as builder

WORKDIR /app

ADD package.json ./
ADD yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
ADD babel.config.js ./
ADD index.html ./
ADD index.ts ./
ADD tsconfig.json ./
ADD webpack.config.js ./
ADD src ./src

RUN yarn run build

FROM nginx:1.17
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
