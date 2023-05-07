import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";

class Application {
  private logger = new Logger(Application.name);
  private readonly DEV_MODE: boolean;
  private readonly PORT: string;
  // private corsOriginList: string[];

  constructor(private server: NestExpressApplication) {
    this.server = server;

    this.DEV_MODE = process.env.NODE_ENV !== "production";
    this.PORT = process.env.PORT;
    process.env
  }

  private async setUpGlobalMiddleware() {

  }

  async bootstrap() {
    await this.setUpGlobalMiddleware();
    await this.server.listen(this.PORT);
  }

  startLog() {
    if (this.DEV_MODE) {
      this.logger.log(`✅ Server on http://localhost:${this.PORT}`)
    } else {
      this.logger.log(`✅ Server on port ${this.PORT}...`)
    }
  }

  errorLog(error: string) {
    this.logger.error(`🆘 Server error ${error}`)
  }
}

async function init(): Promise<void> {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
  const app = new Application(server);
  await app.bootstrap();
  app.startLog();
}

init().catch((error) => {
  new Logger("init").error(error);
});

