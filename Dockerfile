FROM node:22.14.0-bullseye
WORKDIR /app
COPY . .
RUN npm install
CMD [ "npm", "run", "dev", "--", "--host" ]