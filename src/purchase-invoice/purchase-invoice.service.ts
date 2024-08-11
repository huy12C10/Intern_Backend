import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseDocument, PurchaseInvoice } from './schemas/purchase-invoice.schema';

@Injectable()
export class PurchaseService {
  constructor(@InjectModel(PurchaseInvoice.name) private readonly purchaseModel: Model<PurchaseDocument>) {}

  async create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseInvoice> {
    const newPayable = new this.purchaseModel(createPurchaseDto);
    return newPayable.save();
  }

  async findAll(query: any): Promise<PurchaseInvoice[]> {
    const keyword = query.keyword ? {
      status: {
        $regex: query.keyword,
        $options: 'i'
      }
    } : {};

    const purchaseQuery = this.purchaseModel.find({ ...keyword });
    return purchaseQuery.exec();
  }

  async findOne(id: string): Promise<PurchaseInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }
    return this.purchaseModel.findById(id).exec();
  }

  async updateById(id: string, updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseInvoice> {
    const updatedPurchase = await this.purchaseModel.findByIdAndUpdate(
      id,
      updatePurchaseDto,
      {
        new: true,
        runValidators: true
      }
    ).exec();

    if (!updatedPurchase) {
      throw new BadRequestException('Payable not found');
    }

    return updatedPurchase;
  }

  async deleteById(id: string): Promise<PurchaseInvoice> {
    const deletedPurchase = await this.purchaseModel.findByIdAndDelete(id).exec();

    if (!deletedPurchase) {
      throw new BadRequestException('Payable not found');
    }

    return deletedPurchase;
  }
}
