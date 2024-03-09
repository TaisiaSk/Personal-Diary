FROM node:alpine AS builder

WORKDIR /client

COPY package*.json ./
RUN npm ci
COPY . .
ENV VITE_MODE=K8S
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /client/dist /usr/share/nginx/html
COPY --from=builder /client/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]