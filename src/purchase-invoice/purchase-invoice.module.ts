import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseInvoice, PurchaseInvoiceSchema } from '../purchase-invoice/schemas/purchase-invoice.schema';
import { PurchaseInvoiceController } from './purchase-invoice.controller';
import { PurchaseService } from './purchase-invoice.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: PurchaseInvoice.name, schema: PurchaseInvoiceSchema }])],
  providers: [PurchaseService],
  controllers: [PurchaseInvoiceController]
})
export class PurchaseModule {}
