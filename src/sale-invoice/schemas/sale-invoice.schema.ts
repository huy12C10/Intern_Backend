import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export enum StatusSaleInvoice {
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELED = 'CANCELED',
}

@Schema()
export class SaleInvoice extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: string;

  @Prop({
    type: Map,
    of: { 
      productName: { type: MongooseSchema.Types.String, required: true },
      quantity: { type: MongooseSchema.Types.Number, required: true },
      price: { type: MongooseSchema.Types.Number, required: true }
    },
    required: true
  })
  saleProducts: Record<string, { productName: string; quantity: number; price: number }>;

  @Prop({ required: true, enum: StatusSaleInvoice })
  statusSaleInvoice: StatusSaleInvoice;

  @Prop({ type: MongooseSchema.Types.Number, required: true })
  sumPrice: number;

  @Prop({ type: MongooseSchema.Types.Number, required: true })
  sumBill: number;

  @Prop({ type: MongooseSchema.Types.Date, default: Date.now })
  createdAt: Date;
}

export const SalesInvoiceSchema = SchemaFactory.createForClass(SaleInvoice);

export type SaleDocument = SaleInvoice & Document;

// Middleware pre-save để chuyển đổi ngày
SalesInvoiceSchema.pre('save', function (next) {
  if (this.createdAt) {
    this.createdAt = moment(this.createdAt).startOf('day').toDate();
  }
  next();
});

SalesInvoiceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;

    if (ret.createdAt) {
      ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
    }
  },
});
