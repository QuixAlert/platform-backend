FROM node:20.8.0-alpine

WORKDIR /app

COPY ./backend .

RUN npm install --quiet --no-optional --no-found --loglevel=error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
