import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleInvoiceService } from './sale-invoice.service';
import { SaleInvoice } from './schemas/sale-invoice.schema';

@Controller('sale-invoice')
export class SaleInvoiceController {
  constructor(private readonly saleInvoiceService: SaleInvoiceService) {}

  @Post()
  async create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleInvoiceService.create(createSaleDto);
  }

  @Get()
  async findAll() {
    return this.saleInvoiceService.findAll();
  }

//   @Get(':id')
//   async findOne(@Param('id') id: string) {
//     return this.saleInvoiceService.findOne(id);
//   }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleInvoiceService.updateById(id, updateSaleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.saleInvoiceService.deleteById(id);
  }

@Get('filter')
async filterSaleInvoice(@Query() query: any): Promise<SaleInvoice[]> {
  return this.saleInvoiceService.filterSaleInvoice(query);
}

@Get('search')
async searchSaleInvoice(@Query('keyword') keyword: string): Promise<SaleInvoice[]> {
  if (!keyword) {
    throw new BadRequestException('Keyword is required');
  }
  return this.saleInvoiceService.searchSaleInvoice(keyword);
}



}
