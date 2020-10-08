FROM node:12.10.0-alpine

WORKDIR /usr/app/ui

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]