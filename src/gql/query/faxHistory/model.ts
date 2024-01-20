import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

class FaxHistoryInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  reservationProductId?: number | null;

  @IsOptional()
  @IsString()
  name?: string | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date | null;
}

export default FaxHistoryInputModel;

export const FaxHistoryInputModelResolver =
  classValidatorResolver(FaxHistoryInputModel);
