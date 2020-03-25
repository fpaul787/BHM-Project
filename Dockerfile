# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
#base image
FROM node:10

# Create app directory
WORKDIR /app

COPY . .

RUN npm install
RUN npm install react-scripts -g

#define commands you want to run
CMD ["npm", "run", "start"]

# Build your image
# docker build --tag bhm . <------- DON'T FORGET THE PERIOD


# Run your image w/o a name
# docker run -d -p 3000:3000 (image name)

#docker run --name [CUSTOM CONTAINER NAME] -p 3000:3000 bhm
