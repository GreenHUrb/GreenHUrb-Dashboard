FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

CMD [ "npm", "run", "dev" ]