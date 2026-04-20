import { IBase } from "./base.interface";
import { IUser } from "./user.interface";

// Пользователь компании — расширяет базовый IUser и привязывается к конкретной дочерней компании
export interface ICompanyUser extends IBase, IUser {
  companyId: string;
};

export interface ICompany extends IBase {
  organizationId: string; // Связь с родительской организацией
  name: string;
  registryNumber: string;
  industry: string;
  description: string;
  users: ICompanyUser[];
}