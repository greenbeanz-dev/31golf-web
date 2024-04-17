import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

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
  numPeople?: number | null;

  @IsOptional()
  @IsNumber()
  numTeam?: number | null;

  @IsOptional()
  @IsNumber()
  productId?: number | null;

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
  summaryMemo?: string | null;

  @IsOptional()
  @IsString()
  noteCheckout?: string | null;

  @IsOptional()
  // @IsNumber()
  priceCustom?: number | null;

  @IsOptional()
  // @IsNumber()
  costCustom?: number | null;

  @IsOptional()
  // @IsInt()
  priceAddon?: number | null;

  @IsOptional()
  costAddon?: number | null;

  @IsOptional()
  @IsNumber()
  priceAddonMemo?: string | null;

  @IsOptional()
  // @IsInt()
  priceAddonSub?: number | null;

  @IsOptional()
  costAddonSub?: number | null;

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

  @IsOptional()
  @IsBoolean()
  isTransactionEditable?: boolean | null;

  @IsOptional()
  transactionDeposit?: number | null;

  @IsOptional()
  transactionWithdrawal?: number | null;

  @IsOptional()
  transactionRemainder?: number | null;

  @IsOptional()
  transactionUnpaid?: number | null;

  @IsOptional()
  @IsBoolean()
  isWeb?: boolean | null;
}

export default ReservationInputModel;

export const ReservationInputModelResolver = classValidatorResolver(
  ReservationInputModel
);
