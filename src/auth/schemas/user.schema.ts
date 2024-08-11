import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ type: MongooseSchema.Types.String, required: true })
  name: string;

  @Prop({ type: MongooseSchema.Types.String, unique: true, required: true })
  email: string;

  @Prop({ type: MongooseSchema.Types.String, required: true })
  password: string;

  @Prop({ type: MongooseSchema.Types.String })
  refreshToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
