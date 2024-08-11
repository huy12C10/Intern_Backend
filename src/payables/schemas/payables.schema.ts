import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import * as moment from 'moment';
import { Document, Types } from 'mongoose';
export type PayableDocument = Payable & Document;

export enum PaymentTerms { 
    PaymentTerms_1= "Đã_Thanh_Toán",
    PaymentTerms_2 = 'Trả_trước',
}

@Schema()
export class Payable {
  @Prop({ required: true })
  paid: number;

  @Prop({ required: true })
  debt: number;

  @Prop({ required: true, enum: PaymentTerms })
  paymentTerms: PaymentTerms;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true })
  sumBill: number;

  @Prop({ type: Types.ObjectId, ref: 'PurchaseInvoice', required: true })
  purchaseInvoicedId: Types.ObjectId; 
}

export const PayableSchema = SchemaFactory.createForClass(Payable);

PayableSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    ret.dueDate = moment(ret.dueDate).format('YYYY-MM-DD');
    ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
  },
});
