import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { Debt } from './schemas/debt.schema';

@Controller('debts')
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Get('search')
  async getAllDebts(@Query() query: any): Promise<Debt[]> {
    return this.debtService.findAll(query);
  }

  @Post()
  async createDebt(@Body() createDebtDto: CreateDebtDto): Promise<Debt> {
    return this.debtService.create(createDebtDto);
  }

  @Get(':id')
  async getDebt(@Param('id') id: string): Promise<Debt> {
    return this.debtService.findOne(id);
  }

  @Put(':id')
  async updateDebt(
    @Param('id') id: string,
    @Body() updateDebtDto: UpdateDebtDto
  ): Promise<Debt> {
    return this.debtService.updateById(id, updateDebtDto);
  }

  @Delete(':id')
  async deleteDebt(@Param('id') id: string): Promise<Debt> {
    return this.debtService.deleteById(id);
  }

}
