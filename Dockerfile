FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./


# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Run app
CMD [ "npm", "start" ]