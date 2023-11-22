# Use an official Node.js runtime as a parent image
FROM node:14-alpine3.17

# Set the working directory to /app
WORKDIR /backend

COPY ./backend /backend

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
