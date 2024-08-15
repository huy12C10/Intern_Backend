import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Document } from 'mongoose';

export type PurchaseDocument = PurchaseInvoice & Document;

export enum StatusPurchaseInvoice {
  PENDING = 'PENDING', 
  PAID = 'PAID',
  CANCELED = 'CANCELED'
}

@Schema()
export class PurchaseInvoice {
  @Prop({ required: true })
  supplierId: string; 

  @Prop({ required: true })
  purchaseProducts: string; 

  @Prop({ required: true, enum: StatusPurchaseInvoice })
  statusPurchaseInvoice: StatusPurchaseInvoice;
  
  @Prop({ required: true })
  adminId: string; 

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  sumBill: number;

  @Prop({ required: true })
  supplier: string; 
}

export const PurchaseInvoiceSchema = SchemaFactory.createForClass(PurchaseInvoice);

PurchaseInvoiceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    ret.dueDate = moment(ret.dueDate).format('YYYY-MM-DD');
    ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
  },
});
