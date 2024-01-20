import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

class ProductPriceInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date | null;

  @IsOptional()
  @IsNumber({ allowNaN: true, allowInfinity: true })
  price?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: true, allowInfinity: true })
  cost?: number | null;

  @IsOptional()
  @IsString()
  memo?: string | null;
}

export default ProductPriceInputModel;

export const ProductPriceInputModelResolver = classValidatorResolver(
  ProductPriceInputModel
);
