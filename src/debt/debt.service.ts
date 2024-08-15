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

     async filterDebts(query: any): Promise<Debt[]> {
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
    
    if (query.id){
      filters._id = query.id;
    }

    if (query.description) {
      filters.description = query.description; 
    }
    const debtsQuery = this.debtModel.find(filters);
    return debtsQuery.exec();
  }

  async searchDebts(keyword: string): Promise<Debt[]> {
    const searchKeyword = keyword ? {
      description: {
        $regex: keyword,
        $options: 'i'
      }
    } : {};

    const debtsQuery = this.debtModel.find(searchKeyword);
    return debtsQuery.exec();
  }

   async findAll(): Promise<Debt[]> {
    return this.debtModel.find().exec();
  }
}
