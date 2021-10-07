FROM node:14-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install
