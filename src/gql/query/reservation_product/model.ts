import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsNumber, IsOptional, IsString } from "class-validator";

class ReservationProductInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  reservationId?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  productId?: number | null;

  @IsOptional()
  @IsString()
  faxType?: string | null;

  @IsOptional()
  @IsString()
  row01?: string | null;

  @IsOptional()
  @IsString()
  row02?: string | null;

  @IsOptional()
  @IsString()
  row03?: string | null;

  @IsOptional()
  @IsString()
  row04?: string | null;

  @IsOptional()
  @IsString()
  row05?: string | null;

  @IsOptional()
  @IsString()
  row06?: string | null;

  @IsOptional()
  @IsString()
  row07?: string | null;

  @IsOptional()
  @IsString()
  row08?: string | null;

  @IsOptional()
  @IsString()
  row09?: string | null;

  @IsOptional()
  @IsString()
  row10?: string | null;

  @IsOptional()
  @IsString()
  row11?: string | null;
}

export default ReservationProductInputModel;

export const ReservationProductInputModelResolver = classValidatorResolver(
  ReservationProductInputModel
);
