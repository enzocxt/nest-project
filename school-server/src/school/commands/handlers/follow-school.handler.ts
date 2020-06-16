import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { SchoolRepository } from '../../repository/school.repository';
import { FollowSchoolCommand } from '../impl/follow-school.command';

@CommandHandler(FollowSchoolCommand)
export class FollowSchoolHandler implements ICommandHandler<FollowSchoolCommand> {
  constructor(
    private readonly repository: SchoolRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: FollowSchoolCommand) {
    console.log('FollowSchoolCommand...')
    console.log('Data command : ', command)

    const { schoolId, studentId } = command;
    const school = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+schoolId),
    );
    school.followByStudent(studentId);
    school.commit();
  }
}