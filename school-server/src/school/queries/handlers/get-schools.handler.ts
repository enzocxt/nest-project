import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SchoolRepository } from '../../repository/school.repository';
import { GetSchoolsQuery } from '../impl';

@QueryHandler(GetSchoolsQuery)
export class GetSchoolsHandler implements IQueryHandler<GetSchoolsQuery> {
  constructor(private readonly repository: SchoolRepository) {}

  async execute(query: GetSchoolsQuery) {
    console.log('Query处理：Async GetSchoolsQuery...')
    return this.repository.findAll();
  }
}
