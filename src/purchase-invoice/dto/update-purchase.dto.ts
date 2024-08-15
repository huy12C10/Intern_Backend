import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsObject, IsString } from '@nestjs/class-validator';
import { StatusPurchaseInvoice } from '../schemas/purchase-invoice.schema';

export class UpdatePurchaseDto {
  @IsNotEmpty()
  @IsString()
  readonly supplierId: string; 

  @IsNotEmpty()
  @IsObject()
  readonly purchaseProducts: object; 

  @IsNotEmpty()
  @IsEnum(StatusPurchaseInvoice)
  readonly statusPurchaseInvoice: StatusPurchaseInvoice;

  @IsNotEmpty()
  @IsString()
  readonly adminId: string;

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
  readonly supplier: string; 
}
