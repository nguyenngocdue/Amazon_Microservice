# .docker_202/Dockerfile
FROM node:20-alpine

WORKDIR /usr/src/app

# Sao chép các file package.json và package-lock.json để cài đặt dependencies
COPY ./app/package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép mã nguồn vào container
COPY ../app .

# Build ứng dụng Next.js cho môi trường production
RUN npm run build

# Mở cổng 3000 cho ứng dụng
EXPOSE 3000

# Khởi động ứng dụng trong chế độ production
CMD ["npm", "run", "start"]
