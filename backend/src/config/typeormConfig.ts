import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const typeOrmConfig = {
  useFactory: async (
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: "postgres",
    host: configService.get("DB_HOST"), // process.env.DB_HOST
    port: configService.get("DB_PORT"),
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_NAME"),
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true, //! set 'false' in production
    autoLoadEntities: true,
    logging: ['query', 'error'], //! set 'false' in production
    keepConnectionAlive: true
  }),
  inject: [ConfigService]
};