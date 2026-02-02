FROM node:16-alpine

WORKDIR /app

# 1. Инсталација на зависности
COPY package*.json ./
RUN npm install

# 2. Копирај го целиот React код
COPY . .

# 3. Копирај .env.docker -> .env за да ги внесе REACT_APP_* променливите во build-от
COPY .env.docker .env

# 4. Направи production build
RUN npm run build

# 5. Инсталирај го serve за да го служи build-от
RUN npm install -g serve

# 6. Стартувај го frontend-от
CMD ["serve", "-s", "build", "-l", "3000"]
