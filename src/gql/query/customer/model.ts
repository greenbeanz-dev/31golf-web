import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateIf,
} from "class-validator";

class CustomerInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date | null;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  // @ValidateIf((object, value) => value !== "")
  phone: string;

  @IsOptional()
  @IsEmail()
  @ValidateIf((object, value) => value !== "")
  email?: string | null;

  @IsOptional()
  @IsString()
  memo?: string | null;

  @IsOptional()
  @IsNumberString()
  @ValidateIf((object, value) => value !== "")
  fax?: string | null;

  @IsOptional()
  @IsBoolean()
  isVillain?: boolean | null;
}

export default CustomerInputModel;

export const CustomerInputModelResolver =
  classValidatorResolver(CustomerInputModel);
