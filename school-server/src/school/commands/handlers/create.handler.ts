import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { SchoolRepository } from '../../repository/school.repository'
import { CreateCommand } from '../impl/create.command'

@CommandHandler(CreateCommand)
export class CreateHandler implements ICommandHandler<CreateCommand> {
  constructor(
    private readonly repository: SchoolRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateCommand) {
    console.log('CreateSchoolCommand...')

    const { schoolId } = command
    const school = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+schoolId),
    )
    school.delete()
    school.commit()
  }
}