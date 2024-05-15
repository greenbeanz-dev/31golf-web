import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class RequestInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateArrival?: Date | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateDeparture?: Date | null;

  @IsOptional()
  @IsString()
  memo?: string | null;

  @IsOptional()
  @IsNumber()
  numPeople: number;

  @IsOptional()
  @IsNumber()
  numTeam: number;

  @IsOptional()
  @IsString()
  requestContent?: string | null;

  @IsOptional()
  customerId: number;

  @IsOptional()
  @IsBoolean()
  isReservation: boolean;

  @IsOptional()
  @IsBoolean()
  isCanceled: boolean;

  @IsOptional()
  @IsString()
  golfCourse?: string | null;

  // @IsOptional()
  // @IsString()
  // rowStyle?: string | null;
  @IsOptional()
  @IsString()
  schedule?: string | null;
}

export default RequestInputModel;

export const RequestInputModelResolver =
  classValidatorResolver(RequestInputModel);
