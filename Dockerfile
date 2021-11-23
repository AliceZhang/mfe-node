FROM node:12

RUN mkdir /app
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 5001

CMD ["node", "index.js"]


#docker run -p 5001:5001 a71f2b2e8473