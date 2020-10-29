# Build
FROM node:12.7-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build --prod

#Run
FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist/ice-cream-service /usr/share/nginx/html
#EXPOSE 4200
#CMD ["nginx", "-g", "daemon off;"]