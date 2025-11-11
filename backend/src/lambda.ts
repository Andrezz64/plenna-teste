import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import serverlessExpress from '@vendia/serverless-express';
import { Handler } from 'aws-lambda';
import express from 'express';

let cachedServer: Handler;

export const handler: Handler = async (event, context) => {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    
    nestApp.enableCors();
    nestApp.useGlobalPipes(new ValidationPipe());
    nestApp.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('Plenna API')
      .setDescription('Sistema de Pagamentos PIX')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('api/docs', nestApp, document);

    await nestApp.init();
    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer(event, context);
};