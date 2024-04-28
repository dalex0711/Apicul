import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/User';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'SANJUAN2023.',
    database: 'apicul',
    entities: [User],
    synchronize: true,
  }),
    UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
