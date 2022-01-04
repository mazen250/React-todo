FROM node:current-alpine
WORKDIR /app
RUN chown -R root:$(whoami) /app
RUN chmod -R 777 /app/
COPY package.json .
COPY . .
RUN npm install
CMD ["npm", "start"]


# FROM node:14-alpine

# RUN mkdir -p /home/node/app &&\
#  chown -R node:node /home/node/app
# WORKDIR /home/node/app

# RUN chgrp -R 0 /home/node/app &&\
#  chmod -R g+rwX /home/node/app

# COPY package*.json /home/node/app/
# USER 1000
# RUN npm install

# COPY --chown=node:node . /home/node/app
# EXPOSE 3000
# CMD ["npm", "start"]



# FROM node:alpine3.10 as build-step

# RUN mkdir /app
# WORKDIR /app

# COPY package.json /app
# RUN npm install
# COPY . /app

# RUN npm run build

# #Run Steps
# FROM nginx:1.19.8-alpine  
# COPY --from=build-step /app/build /usr/share/nginx/html