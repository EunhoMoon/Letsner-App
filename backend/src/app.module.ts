import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./domain/user/user.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeormConfig";
import { envConfig } from "./config/envConfig";
import { StudentModule } from './domain/student/student.module';
import { LessonModule } from './domain/lesson/lesson.module';
import { AcademyModule } from './domain/academy/academy.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRootAsync(typeOrmConfig), UserModule, StudentModule, LessonModule, AcademyModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
