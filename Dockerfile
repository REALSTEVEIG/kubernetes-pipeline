FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

# copy all files from current directory to working directory in image
COPY . .

COPY package*.json ./

# expose port 3000
EXPOSE 3000

# start app
CMD ["npm", "start"]