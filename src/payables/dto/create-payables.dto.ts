import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { PaymentTerms } from '../schemas/payables.schema';

export class CreatePayableDto {
  @IsNotEmpty()
  @IsNumber()
  readonly paid: number;

  @IsNotEmpty()
  @IsNumber()
  readonly debt: number;

  @IsNotEmpty()
  @IsEnum(PaymentTerms)
  readonly paymentTerms: PaymentTerms;

  @IsNotEmpty()
  @IsDateString() 
  readonly dueDate: string;

  @IsNotEmpty()
  @IsDateString() 
  readonly createdAt: string;

  @IsNotEmpty()
  @IsNumber()
  readonly sumBill: number;

  @IsNotEmpty()
  @IsString()
  readonly purchaseInvoicedId: string; 
}
