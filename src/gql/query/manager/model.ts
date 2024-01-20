import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

export enum UserRole {
  GUEST = "GUEST",
  MANAGER = "MANAGER",
}

class ManagerInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  @ValidateIf((object, value) => value !== "")
  phone?: string | null;

  @IsOptional()
  @IsString()
  @IsEnum(UserRole)
  role: UserRole;
}

export default ManagerInputModel;

export const ManagerInputModelResolver =
  classValidatorResolver(ManagerInputModel);
