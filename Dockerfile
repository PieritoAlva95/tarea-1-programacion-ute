FROM node:18
WORKDIR /app
COPY package.json .
RUN yarn install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then yarn install; \
    else yarn install --only=production; \
    fi 

COPY ./build ./
ENV PORT 3000 
EXPOSE ${PORT}
CMD ["node","src/app.js"]
