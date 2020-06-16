import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcServerOptions } from './grpc.school.options'

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   // 开启 grpc 作为服务
//   app.connectMicroservice<MicroserviceOptions>(grpcServerOptions);

//   await app.startAllMicroservicesAsync();
//   await app.listen(3000);
//   console.log(`Application is running on: ${await app.getUrl()}`);
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcServerOptions);
  await app.startAllMicroservicesAsync();
}
bootstrap();
