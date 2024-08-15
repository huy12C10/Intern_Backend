import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleDocument, SaleInvoice } from './schemas/sale-invoice.schema';

@Injectable()
export class SaleInvoiceService {
  constructor(
    @InjectModel(SaleInvoice.name) private readonly saleModel: Model<SaleDocument>,
  ) {}

  async create(createSaleDto: CreateSaleDto): Promise<SaleInvoice> {
    const newSale = new this.saleModel(createSaleDto);
    return newSale.save();
  }

//   async findOne(id: string): Promise<SaleInvoice> {
//     if (!isValidObjectId(id)) {
//       throw new BadRequestException('Invalid ID ');
//     }
//     return this.saleModel.findById(id).exec();
//   }

  async updateById(id: string, updateSaleDto: UpdateSaleDto): Promise<SaleInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const updatedSale = await this.saleModel.findByIdAndUpdate(
      id,
      updateSaleDto,
      {
        new: true,
        runValidators: true,
      },
    ).exec();

    if (!updatedSale) {
      throw new BadRequestException('SaleInvoice not found');
    }

    return updatedSale;
  }

  async deleteById(id: string): Promise<SaleInvoice> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const deletedInvoice = await this.saleModel.findByIdAndDelete(id).exec();

    if (!deletedInvoice) {
      throw new BadRequestException('SaleInvoice not found');
    }

    return deletedInvoice;
  }

  async findAll(): Promise<SaleInvoice[]> {
    return this.saleModel.find().exec();
  }

async filterSaleInvoice(query: any): Promise<SaleInvoice[]> {
  const filters: any = {};

  if (query.id){
    filters._id = query.id;
  }

 
  if (query.userId) {
    filters.userId = query.userId;
  }


  if (query.statusSaleInvoice) {
    filters.statusSaleInvoice = query.statusSaleInvoice;
  }

 
  if (query.sumBill) {
    filters.sumBill =query.sumBill;;
  }

  
  if (query.sumPrice) {
    filters.sumPrice = query.sumPrice;
  }
  

  if (query.createdAt) {
    const date = new Date(query.createdAt);
    if (!isNaN(date.getTime())) {  // Kiểm tra xem có phải là ngày hợp lệ không
      filters.createdAt = {
        $gte: new Date(date.setHours(0, 0, 0, 0)),  // Bắt đầu từ đầu ngày
        $lte: new Date(date.setHours(23, 59, 59, 999))  // Kết thúc vào cuối ngày
      };
    }
  }
 
  if (query.saleProducts) {
    filters.saleProducts = query.saleProducts;
  }


  return this.saleModel.find(filters).exec();
}

async searchSaleInvoice(keyword: string): Promise<SaleInvoice[]> {
  const searchKeyword: any = {};

  let numericKeyword;
  if (!isNaN(Number(keyword))) {
    numericKeyword = Number(keyword);
  }

  if (numericKeyword !== undefined) {
    // Tìm kiếm theo số
    searchKeyword.$or = [
      { sumPrice: numericKeyword },
      { sumBill: numericKeyword }
    ];
  } else {
    // Tìm kiếm theo chuỗi
    searchKeyword.$or = [
      // Tìm kiếm theo userId
      { userId: { $regex: keyword, $options: 'i' } },
      
      // Tìm kiếm theo các thuộc tính trong mảng đối tượng saleProducts
      {
        saleProducts: {
          $elemMatch: {
            productName: { $regex: keyword, $options: 'i' }
          }
        }
      },
      
      // Tìm kiếm theo statusSaleInvoice
      { statusSaleInvoice: { $regex: `^${keyword}$`, $options: 'i' } }
    ];
  }

  // Thực hiện truy vấn và trả kết quả
  return this.saleModel.find(searchKeyword).exec();
}





}
