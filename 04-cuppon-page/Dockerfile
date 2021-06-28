FROM ubuntu
FROM node
WORKDIR /usr/src
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]