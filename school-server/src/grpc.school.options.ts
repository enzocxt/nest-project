import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcServerOptions: ClientOptions = {
　　transport: Transport.GRPC,
　　options: {
　　　　url: 'localhost:3000', // grpc连接ip与端口
　　　　package: 'school', // 包名 与.proto中保持一致
　　　　protoPath: join(__dirname, '../school.proto')
　　},
};