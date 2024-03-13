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
  category1?: string | null;

  @IsOptional()
  @IsString()
  category2?: string | null;

  @IsOptional()
  @IsString()
  category3?: string | null;

  @IsOptional()
  @IsString()
  priceCheck?: string | null;

  @IsOptional()
  @IsString()
  contact?: string | null;

  @IsOptional()
  @IsString()
  reservationCheck?: string | null;

  @IsOptional()
  @IsString()
  confirmCheck?: string | null;

  @IsOptional()
  @IsString()
  memo?: string | null;
}

export default CourseInputModel;

export const CourseInputModelResolver =
  classValidatorResolver(CourseInputModel);
