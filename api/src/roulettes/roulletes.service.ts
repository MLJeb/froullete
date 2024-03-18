import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roullete } from './entities/roullete.entity';
import { CreateRoulleteDto } from './dto/create-roullete.dto';
import { UpdateRoulleteDto } from './dto/update-roullete.dto';
import { RoulleteToProp } from './entities/roulleteToProp.entity';
import { AddPropToRoulleteDTO } from './dto/add-prop-to-roullete.dto';

@Injectable()
export class RoulletesService {
  constructor(
    @InjectRepository(Roullete)
    private RoulleteRepository: Repository<Roullete>,
    @InjectRepository(RoulleteToProp)
    private RTPRepository: Repository<RoulleteToProp>,
  ) {}

  async create(createRoulleteDto: CreateRoulleteDto) {
    return await this.RoulleteRepository.insert(createRoulleteDto);
  }

  findAll() {
   return this.RoulleteRepository.find();
  }

  findOne(slug: string) {
    return this.RoulleteRepository.findOneOrFail({
      where: {
        slug
      },
      relations: [
        "roulleteToProps.prop"
      ]
    });
  }

  update(slug: string, updateRoulleteDto: UpdateRoulleteDto) {
    return this.RoulleteRepository.update(
      slug,
      updateRoulleteDto
    )
  }

  remove(slug: string) {
    return this.RoulleteRepository.delete(slug);
  }

  addProp(addPropToRoulleteDTO: AddPropToRoulleteDTO) {
    return this.RTPRepository.insert(addPropToRoulleteDTO);
  }

  removeProp(rtpID: number){
    return this.RTPRepository.delete(rtpID);
  }
}
