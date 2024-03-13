import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsNumber, IsOptional } from "class-validator";

class ProductImageInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  productId?: number | null;
}

export default ProductImageInputModel;

export const ReservationFileInputModelResolver = classValidatorResolver(
  ProductImageInputModel
);
