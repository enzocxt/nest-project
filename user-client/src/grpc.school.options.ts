import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:3000',
    package: 'school',
    protoPath: join(__dirname, '../school.proto'),
  },
};
