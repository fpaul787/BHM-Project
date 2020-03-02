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
COPY . ./

#define commands you want to run
CMD ["npm", "run", "start"]

# Build your image
# docker build --tag bhm . <------- DON'T FORGET THE PERIOD


# Run your image
# docker run -d -p 8000:8000 (image name)
