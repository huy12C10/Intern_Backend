// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './auth/config/swagger.config'; // Import file cấu hình Swagger

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwagger(app);  // Gọi hàm để thiết lập Swagger

  await app.listen(3000);
}
bootstrap();
