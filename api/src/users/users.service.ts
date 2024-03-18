import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CREDITS_REWARD,
  REWARD_COOLDOWN_IN_MS,
  User,
} from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.insert(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneOrFail({
      where: { id },
      relations: ['propBaskets.prop'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async getCreditReward(id: number) {
    const user = await this.userRepository.findOneOrFail({
      where: { id },
    });
    const nowTime = new Date().getTime();
    if (nowTime - user.lastCreditReward < REWARD_COOLDOWN_IN_MS) {
      return {'message': `You already get a credit, try again in ${Math.trunc(user.nextRewardIn)} seconds`};
    }
    user.lastCreditReward = nowTime;
    user.credits += CREDITS_REWARD;
    await this.userRepository.save(user);
    return {'message': 'You were rewarded with a credit'};
  }
}
