FROM node:18-bullseye-slim
LABEL org.opencontainers.image.source="https://github.com/naandan/test"
WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "start" ]
