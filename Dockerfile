FROM node:14-alpine

RUN mkdir -p /home/app/node && chown node /home/app/node

USER node

WORKDIR /home/app/node

COPY --chown=node package.json ${WORKDIR}

RUN yarn install

COPY . ${WORKDIR}

ENV HOST=0.0.0.0 PORT=3002

EXPOSE ${PORT}

CMD ["yarn", "start"]