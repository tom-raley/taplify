FROM mhart/alpine-node:latest

WORKDIR /backend

COPY package*.json /backend/

#COPY yarn*.lock /backend/

RUN yarn install

RUN npm install

COPY . /backend/

EXPOSE 3001

CMD ["npm", "start", "--host", "0.0.0.0"]