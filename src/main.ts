import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Use this line instead:
import morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('dev'));

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
