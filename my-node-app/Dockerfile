FROM node:20-alpine
WORKDIR /app
COPY ./blue ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]