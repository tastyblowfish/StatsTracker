# Build angular app using our default node container
FROM node:10.15.3 as builder

## Create a working directory in the container
WORKDIR /stats

## Copy the source code into the container
ADD . /stats

## Run npm install to install all packages 
RUN npm i

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build

## Copy the angular app onto an nginx image
FROM nginx:1.13

## Create the application directory
RUN mkdir -p /stats/app

## Copy our default nginx config
COPY default.conf /etc/nginx/conf.d/

## From 'builder' copy over the artifacts in dist folder to application folder
COPY --from=builder /stats/dist/client /stats/app

