FROM node:12.10.0-alpine

WORKDIR /usr/app/api

COPY package*.json ./

RUN npm install

EXPOSE 9090 

CMD ["npm", "run", "dev"]