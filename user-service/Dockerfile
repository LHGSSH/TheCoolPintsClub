FROM node:12

WORKDIR /app

COPY package*.json ./

#Install app dependencies
RUN npm install

#Bundle source code inside the Docker image
 COPY . .

#Bind port
 EXPOSE 3050

#Command to run the app using CMD--defining runtime; start the server
 CMD ["node", "app.js"]