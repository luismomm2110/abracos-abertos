
FROM node:16.13.0-alpine

RUN mkdir -p /srv/app/api
WORKDIR /srv/app/api

COPY ./package.json /srv/app/api
COPY ./yarn.lock /srv/app/api

RUN yarn install

COPY . /srv/app/api

CMD ["yarn", "start"]