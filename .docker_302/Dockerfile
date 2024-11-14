# Dockerfile sau khi loại bỏ USER node
FROM node:20-alpine

WORKDIR /usr/src/app

COPY ../app/package*.json ./

RUN chown -R node:node /usr/src/app
RUN chmod -R 777 /usr/src/app

RUN npm install 

RUN chmod -R 777 /usr/src/app/node_modules

COPY ../app .

RUN mkdir -p /usr/src/app/.next && chmod -R 777 /usr/src/app/.next

EXPOSE 3000

CMD ["npm", "run", "dev"]
