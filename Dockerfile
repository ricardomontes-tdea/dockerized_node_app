FROM node:18-bullseye as node-electiva-3
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
EXPOSE 4001
CMD [ "npm", "start" ]
