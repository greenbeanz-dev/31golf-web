import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import { IsDate, IsInt, IsNumber, IsOptional, IsString } from "class-validator";

class ReservationInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsString()
  status?: string | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateDeparture?: Date | null;

  @IsOptional()
  @IsNumber()
  numPeople: number;

  @IsOptional()
  @IsNumber()
  numTeam: number;

  @IsOptional()
  productId: number;

  @IsOptional()
  customerId: number;

  @IsOptional()
  @IsNumber()
  managerId: number;

  @IsOptional()
  @IsString()
  memo?: string | null;

  @IsOptional()
  @IsString()
  noteCheckout?: string | null;

  @IsOptional()
  @IsNumber()
  priceCustom?: number | null;

  @IsOptional()
  @IsNumber()
  costCustom?: number | null;

  @IsOptional()
  @IsInt()
  priceAddon?: number | null;

  @IsOptional()
  @IsNumber()
  priceAddonMemo?: string | null;

  @IsOptional()
  @IsInt()
  priceAddonSub?: number | null;

  @IsOptional()
  @IsNumber()
  priceAddonSubMemo?: string | null;

  @IsOptional()
  @IsNumber()
  daysDay?: number | null;

  @IsOptional()
  @IsNumber()
  daysNight?: number | null;

  @IsOptional()
  @IsString()
  smsReservation?: string | null;

  @IsOptional()
  @IsString()
  smsReservationSub?: string | null;

  @IsOptional()
  @IsString()
  smsConfirmation?: string | null;

  @IsOptional()
  @IsString()
  smsCheckout?: string | null;
}

export default ReservationInputModel;

export const ReservationInputModelResolver = classValidatorResolver(
  ReservationInputModel
);
