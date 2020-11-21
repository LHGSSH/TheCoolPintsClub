FROM node:alpine
WORKDIR /node
ADD . .
RUN npm install
EXPOSE 3060
CMD ["node", "app.js"]