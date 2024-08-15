import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DebtModule } from './debt/debt.module';
import { PayablesModule } from './payables/payables.module';
import { PurchaseModule } from './purchase-invoice/purchase-invoice.module';

import { SaleInvoiceModule } from './sale-invoice/sale-invoice.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL),
    PayablesModule,
    PurchaseModule,
    AuthModule,
    DebtModule,
    SaleInvoiceModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
