import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleInvoiceController } from './sale-invoice.controller';
import { SaleInvoiceService } from './sale-invoice.service';
import { SaleInvoice, SalesInvoiceSchema } from './schemas/sale-invoice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SaleInvoice.name, schema: SalesInvoiceSchema},
      
    ]),
  ],
  providers: [SaleInvoiceService],
  controllers: [SaleInvoiceController]
})
export class SaleInvoiceModule {}
