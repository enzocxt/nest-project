import { IEvent } from "@nestjs/cqrs";

export class SchoolDeleteEvent implements IEvent {
  constructor(public readonly schoolId: string) {}
}