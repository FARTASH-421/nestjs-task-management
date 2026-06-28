import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'عنوان نمی تواند خالی باشد' })
  title: string;

  @IsNotEmpty({ message: 'توضیحات نمی تواند خالی باشد' })
  description: string;
}
