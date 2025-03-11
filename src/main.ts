import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Request, Response } from "express";
import helmet from "helmet";
import { AppModule } from "./app.module";
import { App } from "./config/App";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());

    app.setGlobalPrefix("api");

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle("Fairy-Backend-Test")
        .setVersion("1.0")
        .addTag("tasks")
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("docs", app, document);

    const server = app.getHttpAdapter();

    // eslint-disable-next-line @typescript-eslint/naming-convention
    server.get("/", (_: Request, res: Response) => {
        res.redirect("/docs");
    });

    await app.listen(App.port());
}

bootstrap();
