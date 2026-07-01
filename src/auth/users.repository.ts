import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(authCredentilasDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentilasDto;
    const user = this.usersRepository.create({ username, password });
    await this.usersRepository.save(user);
  }
}
