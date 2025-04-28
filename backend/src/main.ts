import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { createServer, proxy } from 'aws-serverless-express';

// Create an Express app
const expressApp = express();
const adapter = new ExpressAdapter(expressApp);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, adapter);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.init();
}
bootstrap();


const server = createServer(expressApp);
export const handler = (event, context) => proxy(server, event, context);
