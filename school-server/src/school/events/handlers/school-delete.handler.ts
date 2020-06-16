import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { SchoolDeleteEvent } from '../impl/school-delete.event';

@EventsHandler(SchoolDeleteEvent)
export class SchoolDeleteHandler
  implements IEventHandler<SchoolDeleteEvent> {
  handle(event: SchoolDeleteEvent) {
    console.log('SchoolDeleteEvent...')
  }
}
