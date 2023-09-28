FROM node:18-alpine as builder

WORKDIR '/app'

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "run", "build"]


