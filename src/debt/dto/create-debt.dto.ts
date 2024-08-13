import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { StatusDebt } from '../schemas/debt.schema'; // Import enum StatusDebt

export class CreateDebtDto {
  @IsNotEmpty()
  @IsNumber()
  readonly amount: number;  // Sửa thành number nếu amount là số

  @IsNotEmpty()
  @IsDateString()
  readonly dueDate: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: Date;

  @IsNotEmpty()
  @IsEnum(StatusDebt)
  readonly statusDebt: StatusDebt;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly supplier: string;

  @IsNotEmpty()
  @IsString()
  readonly supplierId: string;

  @IsNotEmpty()
  @IsString()
  readonly userId: string;
}
