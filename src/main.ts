import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { join } from "path";
import Nunjucks from "nunjucks";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public"), { prefix: "/static/" });

  const nunjucks = Nunjucks.configure(join(__dirname, "views"), {
    autoescape: true,
    throwOnUndefined: false,
    trimBlocks: false,
    lstripBlocks: false,
    watch: true,
    noCache: process.env.NODE_ENV === "production" ? false : true,
    express: app
  });
  app.engine("njk", nunjucks.render);
  app.setViewEngine("njk");
  app.set("view cache", true);

  await app.listen(3000);
}
bootstrap();
