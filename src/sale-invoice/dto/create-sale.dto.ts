  import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsObject, IsString } from '@nestjs/class-validator';
import { StatusSaleInvoice } from '../schemas/sale-invoice.schema';

  export class CreateSaleDto {
    @IsNotEmpty()
    @IsString()
    readonly userId: string;

    @IsNotEmpty()
    @IsObject() // Nếu saleProducts là object
    readonly saleProducts: string; 

    @IsNotEmpty()
    @IsEnum(StatusSaleInvoice)
    readonly statusSaleInvoice: StatusSaleInvoice;

    @IsNotEmpty()
    @IsNumber() // Sửa thành IsNumber
    readonly sumPrice: number;

    @IsNotEmpty()
    @IsNumber()
    readonly sumBill: number;

    @IsNotEmpty()
    @IsDateString()
    readonly createdAt: string;


  }

