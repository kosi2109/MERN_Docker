FROM node:18

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm install -g -y typescript ts-node

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "dev" ]