FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

EXPOSE 6006

CMD ["yarn", "storybook"]
