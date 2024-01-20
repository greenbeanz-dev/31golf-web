import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { IsNumber, IsOptional } from "class-validator";

class ReservationFileInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  reservationId?: number | null;
}

export default ReservationFileInputModel;

export const ReservationFileInputModelResolver = classValidatorResolver(
  ReservationFileInputModel
);
