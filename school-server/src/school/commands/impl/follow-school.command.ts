export class FollowSchoolCommand {
  constructor(
    public readonly schoolId: number,
    public readonly studentId: number,
  ) {}
}
