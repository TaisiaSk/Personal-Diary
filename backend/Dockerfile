FROM node:alpine
WORKDIR /server
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]