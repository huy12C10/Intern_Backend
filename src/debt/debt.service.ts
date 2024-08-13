import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { Debt, DebtDocument } from './schemas/debt.schema';

@Injectable()
export class DebtService {
  constructor(
    @InjectModel(Debt.name) private readonly debtModel: Model<DebtDocument>,
  ) {}

  async create(createDebtDto: CreateDebtDto): Promise<Debt> {
    const newDebt = new this.debtModel(createDebtDto);
    return newDebt.save();
  }

  async findOne(id: string): Promise<Debt> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }
    return this.debtModel.findById(id).exec();
  }

  async updateById(id: string, updateDebtDto: UpdateDebtDto): Promise<Debt> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const updatedDebt = await this.debtModel.findByIdAndUpdate(
      id,
      updateDebtDto,
      {
        new: true,
        runValidators: true
      }
    ).exec();

    if (!updatedDebt) {
      throw new BadRequestException('Debt not found');
    }

    return updatedDebt;
  }

  async deleteById(id: string): Promise<Debt> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const deletedDebt = await this.debtModel.findByIdAndDelete(id).exec();

    if (!deletedDebt) {
      throw new BadRequestException('Debt not found');
    }

    return deletedDebt;
  }

    async findAll(query: any): Promise<Debt[]> {
  

    // Tạo các bộ lọc cho tìm kiếm
    const filters: any = {};

    if (query.amount) {
      filters.amount = query.amount; 
    }

    if (query.statusDebt) {
      filters.statusDebt = query.statusDebt; 
    }
    
    if (query.supplierId) {
        filters.supplierId = query.supplierId;  
    }

    if (query.userId) {
        filters.userId = query.userId;  
    }
    
     const searchKeyword = query.keyword ? {
    description: {
      $regex: query.keyword,
      $options: 'i'
    }
  } : {};
    // Tạo truy vấn tìm kiếm và phân trang
    const debtsQuery = this.debtModel.find({...filters,...searchKeyword })


    return debtsQuery.exec();
  }
}
