FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run-script build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html