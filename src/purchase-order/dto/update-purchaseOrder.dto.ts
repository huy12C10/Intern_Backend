import { IsDateString, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';


export class UpdatePurchaseOrderDto {
  @IsNotEmpty()
  @IsString()
  readonly  supplierId: string;
 
  @IsNotEmpty()
  @IsDateString()
  readonly order_date: string;

  @IsNotEmpty()
  @IsNumber()
  readonly  total_amount: number;
}

