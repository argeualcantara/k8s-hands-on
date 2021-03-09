FROM node:lts

WORKDIR /app

COPY ./server.js /app/server.js
COPY ./package.json /app/package.json
RUN npm install

EXPOSE 8080

CMD node /app/server.js