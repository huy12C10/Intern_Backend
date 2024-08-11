import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from '@nestjs/class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Vui lòng nhập email hợp lệ' })
  @MaxLength(255, { message: 'Email không được vượt quá 255 ký tự' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  @MaxLength(32, { message: 'Mật khẩu không được vượt quá 32 ký tự' })
  readonly password: string;
}

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100, { message: 'Tên không được vượt quá 100 ký tự' })
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Vui lòng nhập email hợp lệ' })
  @MaxLength(255, { message: 'Email không được vượt quá 255 ký tự' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
  @MaxLength(32, { message: 'Mật khẩu không được vượt quá 32 ký tự' })
  readonly password: string;
}
