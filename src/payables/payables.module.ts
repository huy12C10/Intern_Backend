// payables.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseInvoice, PurchaseInvoiceSchema } from 'src/purchase-invoice/schemas/purchase-invoice.schema';
import { PayablesController } from './payables.controller';
import { PayablesService } from './payables.service';
import { Payable, PayableSchema } from './schemas/payables.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Payable.name, schema: PayableSchema },
      { name: PurchaseInvoice.name, schema: PurchaseInvoiceSchema },
    ]),
  ],
  controllers: [PayablesController],
  providers: [PayablesService],
})
export class PayablesModule {}
