FROM node:alpine
WORKDIR /node
ADD . .
RUN npm install
EXPOSE 3050
CMD ["node", "app.js"]