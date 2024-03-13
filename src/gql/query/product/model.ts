import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Transform, Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class ProductInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsString()
  commissionCompany?: string | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateDeparture?: Date | null;

  @IsOptional()
  @IsNumber({ allowNaN: true, allowInfinity: true })
  cost: number;

  @IsOptional()
  @IsBoolean()
  isBlock: boolean;

  @IsOptional()
  @IsNumber({ allowNaN: true, allowInfinity: true })
  price?: number | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;

  @IsOptional()
  @IsNumber()
  @Transform((value) => Number(value), { toClassOnly: true })
  managerId?: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  memo?: string | null;

  @IsOptional()
  @IsString()
  note?: string | null;

  @IsOptional()
  @IsString()
  teeOff?: string | null;

  @IsOptional()
  @IsString()
  blockStatus?: string | null;

  @IsOptional()
  @IsString()
  blockName?: string | null;

  @IsOptional()
  @IsString()
  fax?: string | null;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsNumber()
  courseId?: number;

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
  memoNotice?: string | null;

  @IsOptional()
  @IsString()
  memoManager?: string | null;

  @IsOptional()
  @IsString()
  memoEtc?: string | null;

  @IsOptional()
  @IsString()
  type?: string | null;

  @IsOptional()
  @IsString()
  inclusives?: string | null;

  @IsOptional()
  @IsString()
  exclusives?: string | null;

  @IsOptional()
  @IsString()
  summary?: string | null;

  @IsOptional()
  @IsString()
  schedulePc?: string | null;

  @IsOptional()
  @IsString()
  benefit?: string | null;

  @IsOptional()
  @IsString()
  notice?: string | null;

  @IsOptional()
  @IsString()
  caution?: string | null;

  @IsOptional()
  @IsString()
  scheduleTablePc?: string | null;

  @IsOptional()
  @IsString()
  courseAddress?: string | null;

  @IsOptional()
  @IsString()
  cancellationPolicy?: string | null;
}

export default ProductInputModel;

export const ProductInputModelResolver =
  classValidatorResolver(ProductInputModel);
