FROM node:16.13.0-alpine

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY ./package.json /srv/app/client
COPY ./yarn.lock /srv/app/client

RUN yarn install

COPY . /srv/app/client

CMD ["yarn", "start", "run"]