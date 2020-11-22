FROM node:alpine
WORKDIR /node
ADD . .
RUN npm install
EXPOSE 3090
CMD ["node", "app.js"]