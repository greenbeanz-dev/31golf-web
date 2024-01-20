import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class CourseInputModel {
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

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  @IsString()
  city?: string | null;

  @IsOptional()
  @IsString()
  country?: string | null;

  @IsOptional()
  @IsString()
  // @ValidateIf((object, value) => value !== "")
  fax?: string | null;

  @IsOptional()
  @IsString()
  partnerName?: string | null;

  @IsOptional()
  @IsString()
  // @ValidateIf((object, value) => value !== "")
  phone?: string | null;

  @IsOptional()
  @IsString()
  state?: string | null;
}

export default CourseInputModel;

export const CourseInputModelResolver =
  classValidatorResolver(CourseInputModel);
