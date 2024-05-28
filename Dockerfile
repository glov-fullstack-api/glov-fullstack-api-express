# Pull the Node image from Docker Hub
FROM node:20-alpine

# Setting Working Directory
WORKDIR /app

# Copying only package.json
COPY package.json package-lock.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container 
COPY . /app

EXPOSE 3000

# Run the app
CMD ["npm", "start"]
