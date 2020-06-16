import { AggregateRoot } from '@nestjs/cqrs';
import { SchoolDeleteEvent } from '../events/impl/school-delete.event';

export class School extends AggregateRoot {
  constructor(private readonly id: string, private readonly name: string) {
    super();
  }

  delete() {
    // logic
    console.log('School Model 方法 delete()')
    // this.apply(new SchoolDeleteEvent(this.id));
  }

  followByStudent(studentId: number) {
    console.log('School Model 方法 followByStudent()')
    //
  }
}
