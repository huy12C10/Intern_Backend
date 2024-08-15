import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseDocument, PurchaseInvoice } from './schemas/purchase-invoice.schema';

@Injectable()
export class PurchaseService {
  constructor(@InjectModel(PurchaseInvoice.name) private readonly purchaseModel: Model<PurchaseDocument>) {}

  async findAll(): Promise<PurchaseInvoice[]> {
    return this.purchaseModel.find().exec();
  }

  async create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseInvoice> {
    const newPurchase = new this.purchaseModel(createPurchaseDto);
    return newPurchase.save();
  }

  async findOne(id: string): Promise<PurchaseInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.purchaseModel.findById(id).exec();
  }

  async updateById(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.purchaseModel.findByIdAndUpdate(id, updatePurchaseDto, { new: true }).exec();
  }

  async deleteById(id: string): Promise<PurchaseInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.purchaseModel.findByIdAndDelete(id).exec();
  }

 
}
