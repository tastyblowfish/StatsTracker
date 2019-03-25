import { IsString } from 'class-validator';
  
export class PayloadDto {
  @IsString() readonly id: string;
  @IsString() readonly email: string;
}
