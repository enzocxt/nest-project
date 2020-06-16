import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { StudentFollowedSchoolEvent } from '../impl/student-followed-school.event';

@EventsHandler(StudentFollowedSchoolEvent)
export class StudentFollowedSchoolHandler
  implements IEventHandler<StudentFollowedSchoolEvent> {
  handle(event: StudentFollowedSchoolEvent) {
    console.log('StudentFollowedSchoolEvent...')
  }
}
