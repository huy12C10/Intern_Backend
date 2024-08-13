import { IsDateString, IsEnum, IsNotEmpty, IsString } from '@nestjs/class-validator';
import { StatusDebt } from '../schemas/debt.schema'; // Import enum StatusDebt

export class UpdateDebtDto {
  @IsNotEmpty()
  @IsString()
  readonly amount: string;  // Thay đổi kiểu nếu cần

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
