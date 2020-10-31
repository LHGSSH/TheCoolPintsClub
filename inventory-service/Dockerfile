#FROM is the base image for which we will run our application
FROM node:12

#Set where the work directory for it would be
WORKDIR /app

COPY package*.json ./

#Install app dependencies
RUN npm install

#Bundle source code inside the Docker image--use copy instruction
 COPY . .

#Bind the particular port and use it 
 EXPOSE 3060

#Command to run the app using CMD--defining runtime; start the server
 CMD ["node", "app.js"]