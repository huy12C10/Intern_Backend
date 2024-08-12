import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePurchaseOrderDto } from './dto/create-purchaseOrder.dto';
import { UpdatePurchaseOrderDto } from './dto/update-purchaseOrder.dto';
import { PurchaseOrder } from './schema/purchase-order.schema';

@Injectable()
export class PurchaseOrderService {
  constructor(
    @InjectModel(PurchaseOrder.name) private purchaseOrderModel: Model<PurchaseOrder>,
  ) {}

  async create(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    const createdOrder = new this.purchaseOrderModel(createPurchaseOrderDto);
    return createdOrder.save();
  }

  async findOne(id: string): Promise<PurchaseOrder> {
    return this.purchaseOrderModel.findById(id).exec();
  }

  async update(id: string, updatePurchaseOrderDto: UpdatePurchaseOrderDto): Promise<PurchaseOrder> {
    return this.purchaseOrderModel.findByIdAndUpdate(id, updatePurchaseOrderDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.purchaseOrderModel.findByIdAndDelete(id).exec();
  }

  async findAll(): Promise<PurchaseOrder[]> {
    return this.purchaseOrderModel.find().exec();
  }
}
