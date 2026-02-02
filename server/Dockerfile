# Официјална Node 16 слика 
FROM node:16-alpine

# Работна папка во контејнерот
WORKDIR /app

# Копирај ги само package фајловите
COPY package*.json ./

# Инсталирај ги зависностите
RUN npm install

# Копирај го останатиот backend код
COPY . .

# Отвори порт 5000
EXPOSE 5000

# Стартувај го серверот
CMD ["node", "index.js"]
