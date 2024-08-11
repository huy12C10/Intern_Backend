import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWTStrategy } from './jwt.strategy';
import { User, UserSchema } from './schemas/user.schema';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const logger = new Logger('JwtModule');
        const secret = config.get<string>('JWT_SECRET');
        const expiresIn = config.get<string | number>('JWT_EXPIRE');
        logger.debug(`JWT_SECRET: ${secret}`);
        logger.debug(`JWT_EXPIRE: ${expiresIn}`);
        return {
          secret,
          signOptions: {
            expiresIn,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JWTStrategy],
  exports: [ PassportModule, AuthService,JWTStrategy]
})
export class AuthModule {}
