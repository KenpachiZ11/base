import { IBase } from "./base.interface";
import { IUser } from "./user.interface";
import { ICompany } from "./company.interface";

// Пользователь организации — расширяет базовый IUser и привязывается к конкретной организации
export interface IOrgUser extends IBase, IUser {
  organizationId: string;
};

export interface IOrganization extends IBase {
  name: string;
  description: string;
  users: IOrgUser[];
  companies: ICompany[];
};