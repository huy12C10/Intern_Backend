import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PayablesModule } from './payables/payables.module';
import { PurchaseModule } from './purchase-invoice/purchase-invoice.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { DebtModule } from './debt/debt.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL),
    PayablesModule,
    PurchaseModule,
    AuthModule,
    PurchaseOrderModule,
    DebtModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
