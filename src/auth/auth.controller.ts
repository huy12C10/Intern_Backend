import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ accessToken: string; refreshToken: string }> {
    this.logger.log('SignUp request received');
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string; refreshToken: string }> {
    this.logger.log('Login request received');
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  async getAllUsers(): Promise<User[]> {
    this.logger.log('GetAllUsers request received');
    return this.authService.findAll();
  }

  
}
