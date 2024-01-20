import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

class TransactionInputModel {
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false })
  id?: number | null;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date | null;

  @IsOptional()
  @IsNumber()
  reservationId: number;

  @IsOptional()
  @IsString()
  type?: string | null;

  @IsOptional()
  @IsString()
  method?: string | null;

  @IsOptional()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  account?: string | null;

  @IsOptional()
  @IsString()
  memo?: string | null;

  @IsOptional()
  @IsNumber()
  savingsAccountId?: number | null;
}

export default TransactionInputModel;

export const TransactionInputModelResolver = classValidatorResolver(
  TransactionInputModel
);
