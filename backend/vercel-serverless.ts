import { Handler, Context } from 'aws-lambda';
import { createServer, proxy } from '@vendia/serverless-express';
import { AppModule } from './src/app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Plenna API')
    .setDescription('Sistema de Pagamentos')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.init(); // ⚠️ importante no serverless
  const expressApp = app.getHttpAdapter().getInstance();
  return createServer(expressApp);
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!server) {
    server = await bootstrap();
  }
  return proxy(server, event, context, 'PROMISE').promise;
};
