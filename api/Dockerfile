FROM node:10.15.3
  
RUN mkdir /api
ADD . /api

WORKDIR /api
RUN rm -rf /api/dist

RUN npm install
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["/bin/bash", "-l", "-c", "npm run start:prod"]
