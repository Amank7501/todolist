# Fetching the latest node image on alpine linux
FROM node:alpine AS build

# Declaring env
ENV NODE_ENV build

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

EXPOSE 8080

# Starting our application
CMD ["npm","start]

