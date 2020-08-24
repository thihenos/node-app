FROM node:12.18.1-alpine3.9

RUN apk update

RUN apk add curl

COPY . usr/app

WORKDIR usr/app

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
