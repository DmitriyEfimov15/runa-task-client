# =========================
# 1️⃣ Build Stage
# =========================
FROM node:22-alpine AS builder

# Рабочая папка
WORKDIR /app

# Копируем package.json и package-lock.json / yarn.lock
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь исходный код
COPY . .

# Собираем Next.js
RUN npm run build

# =========================
# 2️⃣ Production Stage
# =========================
FROM node:22-alpine

WORKDIR /app

# Только нужные зависимости
COPY package*.json ./
RUN npm ci --omit=dev

# Копируем билд и остальные нужные папки
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Если используешь environment переменные для Next
ENV NODE_ENV=production

# Открываем порт для сервера Next.js
EXPOSE 3000

# Запуск production сервера Next.js
CMD ["npm", "start"]
