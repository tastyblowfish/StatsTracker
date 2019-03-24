FROM node:10.15.3 
  
RUN mkdir -p /kubernetes-stats
ADD . /kubernetes-stats
RUN rm /kubernetes-stats/Dockerfile
WORKDIR /kubernetes-stats

RUN apt-get clean
RUN apt-get update
RUN apt-get install -y git vim telnet

RUN echo 1.0 >> /kubernetes-stats/version.txt

ENTRYPOINT ["/bin/bash"]
