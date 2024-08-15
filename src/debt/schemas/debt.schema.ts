import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';



export enum StatusDebt {
    PENDING = 'PENDING', 
    PAID = 'PAID',
    CANCELED = 'CANCELED'
  }
@Schema({ timestamps: true })
export class Debt extends Document {
  @Prop({ type: MongooseSchema.Types.Number, required: true })
  amount: number;

  @Prop({ type: MongooseSchema.Types.Date, unique: true, required: true })
  dueDate: Date;

  @Prop({ type: MongooseSchema.Types.Date, default: Date.now  })
  createdAt: Date; 

  @Prop({ required: true, enum: StatusDebt })
   statusDebt: StatusDebt;

  @Prop({ type: MongooseSchema.Types.String, required: true })
  description: string;

  @Prop({ type: MongooseSchema.Types.String, required: true })
  supplier: string;

  @Prop({ type: Types.ObjectId, ref: 'Supplier', required: true })
  supplierId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; 
}

export type DebtDocument = Debt & Document;

export const DebtSchema = SchemaFactory.createForClass(Debt);


DebtSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      ret.dueDate = moment(ret.dueDate).format('YYYY-MM-DD');
      ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
    },
  });