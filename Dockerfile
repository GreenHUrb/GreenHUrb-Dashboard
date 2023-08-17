FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN apk add --no-cache python3 make g++
# Set environment variable for Python
ENV PYTHON /usr/bin/python3

RUN npm install --legacy-peer-deps

COPY . .

CMD [ "npm", "run", "dev" ]