import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseService } from './purchase-invoice.service';
import { PurchaseInvoice } from './schemas/purchase-invoice.schema';

@Controller('purchase-invoice')

export class PurchaseInvoiceController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  async getAllPurchase(@Query() query: any): Promise<PurchaseInvoice[]> {
    return this.purchaseService.findAll(query);
  }

  @Post()
  async createPurchase(@Body() createDebtDto: CreatePurchaseDto): Promise<PurchaseInvoice> {
    return this.purchaseService.create(createDebtDto);
  }

  @Get(':id')
  async getPurchase(@Param('id') id: string): Promise<PurchaseInvoice> {
    return this.purchaseService.findOne(id);
  }

  @Put(':id')
  async updatePurchase(
    @Param('id') id: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseInvoice> {
    return this.purchaseService.updateById(id, updatePurchaseDto);
  }


  @Delete(':id')
    async deletePurchase(@Param('id') id: string): Promise<PurchaseInvoice> {
        return this.purchaseService.deleteById(id);
    }
}

