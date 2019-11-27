FROM mhart/alpine-node:latest

WORKDIR /client

COPY package*.json /client/

ADD yarn.lock /client/

RUN yarn

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]