import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prop } from './entities/prop.entity';
import { CreatePropDto } from './dto/create-prop.dto';
import { UpdatePropDto } from './dto/update-prop.dto';

@Injectable()
export class PropsService {
  constructor(
    @InjectRepository(Prop)
    private propRepository: Repository<Prop>,
  ) {}

  async create(createPropDto: CreatePropDto) {
    return await this.propRepository.insert(createPropDto);
  }

  findAll() {
   return this.propRepository.find();
  }

  findOne(slug: string) {
    return this.propRepository.findOneOrFail({
      where: {
        slug
      }
    });
  }

  update(slug: string, updatePropDto: UpdatePropDto) {
    return this.propRepository.update(
      slug,
      updatePropDto
    )
  }

  remove(slug: string) {
    return this.propRepository.delete(slug);
  }
}
