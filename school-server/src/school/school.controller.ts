import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { School, SchoolById, StudentFollowSchool } from './interfaces/school.interface';
import { FollowSchoolCommand } from './commands/impl/follow-school.command'
import { GetSchoolsQuery } from './queries/impl'

@Controller()
export class SchoolController {
  private readonly items: School[] = [
    {
      id: 1,
      name: "Marywood University",
      alphaTwoCode: "PA",
      domains: [
        "marywood.edu"
      ],
      country: "United States"
    },
    {
      id: 2,
      name: "Cégep de Saint-Jérôme",
      alphaTwoCode: "CA",
      domains: [
        "cstj.qc.ca"
      ],
      country: "Canada"
    },
    {
      id: 3,
      name: "Lindenwood University",
      alphaTwoCode: "US",
      domains: [
        "lindenwood.edu"
      ],
      country: "United States"
    },
  ]

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('SchoolService')
  findOne(data: SchoolById): School {
    console.log('收到 grpc findOne 请求，开始处理。。。')
    return this.items.find(({ id }) => id === data.id)
  }

  @GrpcMethod('SchoolService')
  async findAll(): Promise<School[]> {
    console.log('收到 grpc findAll 请求，开始处理。。。')
    return this.queryBus.execute(new GetSchoolsQuery())
  }

  @GrpcMethod('SchoolService')
  async follow(data: StudentFollowSchool): Promise<School> {
    console.log('收到 grpc follow 请求，开始处理。。。')
    console.log('数据 : ', data)
    const command = new FollowSchoolCommand(data.schoolId, data.studentId)
    console.log('command : ', command)
    return this.commandBus.execute(command)
  }
}
