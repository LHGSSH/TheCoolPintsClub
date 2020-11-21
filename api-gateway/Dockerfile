FROM node:alpine
WORKDIR /node
ADD . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]