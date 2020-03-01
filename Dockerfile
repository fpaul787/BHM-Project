# https://nodejs.org/de/docs/guides/nodejs-docker-webapp/s
#base image
FROM node:10

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.jso AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# for production
# RUN npm ci --only=production

# bundle app's source code inside the Docker image, use COPY instruction
COPY . .

EXPOSE 8080

#define commands you want to run
CMD ["npm", "run", "start"]

# Build your image
# docker build --tag bhm . <------- DON'T FORGET THE PERIOD
