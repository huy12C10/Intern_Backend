import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { PurchaseDocument, PurchaseInvoice } from '../purchase-invoice/schemas/purchase-invoice.schema';
import { CreatePayableDto } from './dto/create-payables.dto';
import { UpdatePayableDto } from './dto/update-payables.dto';
import { Payable, PayableDocument } from './schemas/payables.schema';

@Injectable()
export class PayablesService {
  constructor(
    @InjectModel(Payable.name) private readonly payableModel: Model<PayableDocument>,
    @InjectModel(PurchaseInvoice.name) private readonly purchaseInvoiceModel: Model<PurchaseDocument>,
  ) {}

  async create(createPayableDto: CreatePayableDto): Promise<Payable> {
    // Kiểm tra PurchaseInvoice có tồn tại không
    const purchaseInvoice = await this.purchaseInvoiceModel.findById(createPayableDto.purchaseInvoicedId).exec();

    if (!purchaseInvoice) {
      throw new BadRequestException('PurchaseInvoice không tồn tại');
    }

    // Tạo mới một Payable và liên kết với PurchaseInvoice
    const newPayable = new this.payableModel({
      ...createPayableDto,
      purchaseInvoicedId: purchaseInvoice._id,
    });

    return newPayable.save();
  }

  async findAll(query: any): Promise<Payable[]> {
    const keyword = query.keyword ? {
      status: {
        $regex: query.keyword,
        $options: 'i'
      }
    } : {};

    const payablesQuery = this.payableModel.find({ ...keyword });
    return payablesQuery.exec();
  }

  async findOne(id: string): Promise<Payable> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }
    return this.payableModel.findById(id).exec();
  }

  async updateById(id: string, updatePayableDto: UpdatePayableDto): Promise<Payable> {
    const updatedPayable = await this.payableModel.findByIdAndUpdate(
      id,
      updatePayableDto,
      {
        new: true,
        runValidators: true
      }
    ).exec();

    if (!updatedPayable) {
      throw new BadRequestException('Payable not found');
    }

    return updatedPayable;
  }

  async deleteById(id: string): Promise<Payable> {
    const deletedPayable = await this.payableModel.findByIdAndDelete(id).exec();

    if (!deletedPayable) {
      throw new BadRequestException('Payable not found');
    }

    return deletedPayable;
  }
}
