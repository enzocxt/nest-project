import { Controller, OnModuleInit, Get, Param, Post, Body } from '@nestjs/common';
import {
  GrpcMethod,
  ClientGrpc,
  Client,
  Transport,
} from '@nestjs/microservices';
import { School, SchoolList } from './interfaces/school.interface';
import { Observable } from 'rxjs';
import { grpcClientOptions } from '../grpc.school.options';

interface SchoolService {
  findOne(data: { id: number }): Observable<any>;
  findAll(data: any): Observable<SchoolList>;
  create(data: any): Observable<any>;
  follow(data: {schoolId: number, studentId: number}): Observable<any>;
}

@Controller('school')
export class SchoolController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private schoolService: SchoolService;

  onModuleInit() {
    this.schoolService = this.client.getService<SchoolService>('SchoolService');
  }

  @Get(':id')
  get(@Param() params): Observable<any> {
    console.log('Client : findOne()')
    return this.schoolService.findOne({ id: +params.id })
  }

  @Get('')
  async list(): Promise<SchoolList> {
    console.log('Client : findAll()')
    const data = await this.schoolService.findAll({}).toPromise()
    console.log('Client : findAll() return data', data)
    return data
  }

  @Get(':schoolId/:studentId')
  follow(@Param() params): Observable<any> {
    console.log('Client : follow()')
    console.log('Data : ', params)
    return this.schoolService.follow({ schoolId: +params.schoolId, studentId: +params.studentId})
  }
}
