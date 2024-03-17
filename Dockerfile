FROM node:18-bullseye-slim

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]
