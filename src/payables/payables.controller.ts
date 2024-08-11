// payables.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreatePayableDto } from './dto/create-payables.dto';
import { UpdatePayableDto } from './dto/update-payables.dto';
import { PayablesService } from './payables.service';
import { Payable } from './schemas/payables.schema';

@Controller('payables')
export class PayablesController {
  constructor(private readonly payablesService: PayablesService) {}

  @Get()
  async getAllPayables(@Query() query: any): Promise<Payable[]> {
    return this.payablesService.findAll(query);
  }

  @Post()
  async createPayable(@Body() createPayableDto: CreatePayableDto): Promise<Payable> {
    return this.payablesService.create(createPayableDto);
  }

  @Get(':id')
  async getPayable(@Param('id') id: string): Promise<Payable> {
    return this.payablesService.findOne(id);
  }

  @Put(':id')
  async updatePayable(
    @Param('id') id: string,
    @Body() updatePayableDto: UpdatePayableDto
  ): Promise<Payable> {
    return this.payablesService.updateById(id, updatePayableDto);
  }


   @Delete(':id')
    async deletePayable(@Param('id') id: string): Promise<Payable> {
        return this.payablesService.deleteById(id);
    }
}
