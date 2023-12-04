FROM node:18

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm install -g -y typescript 

RUN npm run build

EXPOSE 8000

CMD [ "npm", "start" ]