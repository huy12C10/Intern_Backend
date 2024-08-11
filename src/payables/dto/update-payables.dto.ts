import { IsEnum, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { PaymentTerms } from '../schemas/payables.schema';

export class UpdatePayableDto {
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
  @IsString()
  readonly dueDate: string;

  @IsNotEmpty()
  @IsString()
  readonly createdAt: string;

  @IsNotEmpty()
  @IsNumber()
  readonly sumBill: number;

  @IsNotEmpty()
  @IsString()
  readonly purchaseInvoicedId: string;
}
