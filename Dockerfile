#FROM node:14.5.0
#ENV APP_ROOT /
#
#ENV NODE_ENV production
#
#WORKDIR ${APP_ROOT}
#ADD . ${APP_ROOT}
#
#RUN npm ci
#RUN npm run build
#
#CMD ["npm", "run", "start"]

FROM node:12


# создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ астериск ("*") используется для того чтобы по возможности
# скопировать оба файла: package.json и package-lock.json
COPY package*.json ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

# копируем исходный код
COPY . .

CMD ["npm", "run", "dev"]
