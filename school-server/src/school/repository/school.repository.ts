import { Injectable } from '@nestjs/common'
import { School } from '../models/school.model'
import { itemSchool } from './fixtures/item'

@Injectable()
export class SchoolRepository {
  async findOneById(id: number): Promise<School> {
    return itemSchool;
  }

  async findAll(): Promise<School[]> {
    console.log('SchoolRepository 返回结果：async findAll()')
    return [itemSchool];
  }

  async followByStudent(id: number): Promise<School> {
    console.log('SchoolRepository 返回结果：async followByStudent()')
    return itemSchool
  }
}
