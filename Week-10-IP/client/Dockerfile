FROM node:13.12.0-alpine

WORKDIR /app

COPY package*.json /app/
RUN npm i

COPY . /app/

CMD [ "npm", "start" ]