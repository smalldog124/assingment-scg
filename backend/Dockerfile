FROM node:10-alpine3.9
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY index.js ./app/
EXPOSE 3000
CMD node app/index.js