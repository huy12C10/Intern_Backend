    import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment'; // Sử dụng import đúng cách
import { Document } from 'mongoose';

    @Schema()
    export class PurchaseOrder extends Document {
    @Prop({ required: true })
    supplierId: string;

    @Prop({ required: true })
    order_date: Date;

    @Prop({ required: true })
    total_amount: number;
    
    @Prop({ default: Date.now })
    createdAt: Date;
    }

    export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);

    PurchaseOrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
         if (ret.order_date) {
      ret.order_date = moment(ret.order_date).format('YYYY-MM-DD');
    }
        if (ret.createdAt) {
        ret.createdAt = moment(ret.createdAt).format('YYYY-MM-DD');
        }
    },
    });
