FROM mhart/alpine-node:latest

WORKDIR /backend

COPY package*.json /backend/

ADD yarn.lock /backend/

RUN yarn install

COPY . /backend/

EXPOSE 3001

CMD ["npm", "start", "--host", "0.0.0.0"]