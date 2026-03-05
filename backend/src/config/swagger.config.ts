import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('API проекта Base')
    .setDescription('Тестовое описание')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    // Можно указать дополнительные параметры, например, include или custom site
  });

  SwaggerModule.setup('api', app, document, {
    explorer: true,
    customSiteTitle: 'API Docs',
    swaggerOptions: {
      customCss: `
        :root {
          --color-background: #222;
          --color-text: #eee;
        }

        body {
          background-color: var(--color-background);
          color: var(--color-text);
        }
      `
    }
  });
};