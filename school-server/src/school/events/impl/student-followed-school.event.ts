export class StudentFollowedSchoolEvent {
  constructor(
    public readonly studentId: number,
    public readonly schoolId: number,
  ) {}
}
