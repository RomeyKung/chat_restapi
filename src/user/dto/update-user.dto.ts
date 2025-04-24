import { ApiProperty, PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateUserDto extends PickType(CreateUserDto, ['displayName']) {
  @ApiProperty({
    description: 'New display name (must be at least 3 characters)',
    example: 'NewRome',
  })
  @IsString()
  @MinLength(3)
  displayName: string;
}
