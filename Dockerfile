
FROM node:20 as build
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build -- --configuration production --project my-portfolio

FROM nginx:alpine

COPY --from=build /app/dist/my-portfolio/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
