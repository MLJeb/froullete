import { Injectable } from '@nestjs/common';
import { CreatePropDto } from './dto/create-prop.dto';
import { UpdatePropDto } from './dto/update-prop.dto';

@Injectable()
export class PropsService {
  create(createPropDto: CreatePropDto) {
    return 'This action adds a new prop';
  }

  findAll() {
    return `This action returns all props`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prop`;
  }

  update(id: number, updatePropDto: UpdatePropDto) {
    return `This action updates a #${id} prop`;
  }

  remove(id: number) {
    return `This action removes a #${id} prop`;
  }
}
