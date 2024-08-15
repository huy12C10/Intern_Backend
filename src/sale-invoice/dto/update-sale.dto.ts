import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { StatusSaleInvoice } from '../schemas/sale-invoice.schema';

export class UpdateSaleDto {
  @IsNotEmpty()
  @IsString()
  readonly userId: string;

  @IsNotEmpty()
  @IsString() // Sửa thành @IsString
  readonly saleProducts: string;

  @IsNotEmpty()
  readonly statusSaleInvoice: StatusSaleInvoice;

  @IsNotEmpty()
  @IsNumber()
  readonly sumPrice: number;

  @IsNotEmpty()
  @IsNumber()
  readonly sumBill: number;

  @IsNotEmpty()
  @IsDateString()
  readonly createdAt: string;
}
