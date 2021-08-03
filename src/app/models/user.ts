import { Role } from '../enums/role.enum';

export class User {
  constructor(
    public userid: string,
    public userName: string,
    public role: Role,
    public isApproved: boolean
  ) {}
}
