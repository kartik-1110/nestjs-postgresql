import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  const config = new DocumentBuilder().setTitle(process.env.SWAGGER_TITLE).setDescription(process.env.SWAGGER_DESCRIPTION).setVersion(process.env.SWAGGER_VERSION)
  .addTag(process.env.SWAGGER_TAG).build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
