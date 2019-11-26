FROM mhart/alpine-node:latest

WORKDIR /client

COPY package*.json /client/

ADD yarn.lock /tmp/

RUN npm install

RUN yarn install

COPY . /client/

EXPOSE 3000

CMD ["npm", "start"]