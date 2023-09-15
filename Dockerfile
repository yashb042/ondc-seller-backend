FROM node:14
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY src /app/src
COPY *.env /app/
COPY *.sh /app/
EXPOSE 2010
CMD ["npm", "start"]
