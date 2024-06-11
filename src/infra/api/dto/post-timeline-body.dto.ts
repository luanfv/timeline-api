import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { isBrDate } from './validator/br-date.validator';

export class PostTimelineBodyDto {
  @IsString({ message: 'O tipo do title é string' })
  @IsNotEmpty({ message: 'É preciso enviar um title' })
  title: string;

  @isBrDate({
    message: 'A data precisa estar no formato brasileiro DD/MM/YYYY',
  })
  @IsNotEmpty({ message: 'É preciso enviar um date' })
  date: string;

  @IsString({ message: 'O tipo do description é string' })
  @IsOptional()
  description: string;
}
