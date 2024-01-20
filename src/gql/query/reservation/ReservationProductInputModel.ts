import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsNumber, IsOptional, IsString } from "class-validator";

class ReservationProductInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  reservationId?: number | null;

  @IsOptional()
  productId?: number | null;

  @IsOptional()
  @IsString()
  name?: string | null;

  @IsOptional()
  @IsString()
  price?: number;

  @IsOptional()
  @IsString()
  cost?: number;
}

export default ReservationProductInputModel;

export const ReservationProductInputModelResolver = classValidatorResolver(
  ReservationProductInputModel
);
