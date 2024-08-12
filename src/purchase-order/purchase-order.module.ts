import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseOrderController } from './purchase-order.controller';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrder, PurchaseOrderSchema } from './schema/purchase-order.schema';

@Module({
   imports: [
    MongooseModule.forFeature([
      { name: PurchaseOrder.name, schema: PurchaseOrderSchema},
      
    ]),
  ],
  providers: [PurchaseOrderService],
  controllers: [PurchaseOrderController]
})
export class PurchaseOrderModule {}
