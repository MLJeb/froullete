import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roullete } from './entities/roullete.entity';
import { CreateRoulleteDto } from './dto/create-roullete.dto';
import { UpdateRoulleteDto } from './dto/update-roullete.dto';
import { RoulleteToProp } from './entities/roulleteToProp.entity';
import { AddPropToRoulleteDTO } from './dto/add-prop-to-roullete.dto';
import { User } from 'src/users/entities/user.entity';
import weightedRandom from './utils/weightedRandoms';
import { Prop } from 'src/props/entities/prop.entity';
import { PropBasket } from 'src/users/entities/PropBasket.entity';

@Injectable()
export class RoulletesService {
  constructor(
    @InjectRepository(Roullete)
    private RoulleteRepository: Repository<Roullete>,
    @InjectRepository(RoulleteToProp)
    private rtpRepository: Repository<RoulleteToProp>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(PropBasket)
    private propBasketRepository: Repository<PropBasket>,
  ) {}

  async create(createRoulleteDto: CreateRoulleteDto) {
    return await this.RoulleteRepository.insert(createRoulleteDto);
  }

  findAll() {
   return this.RoulleteRepository.find();
  }

  async findOne(slug: string) {
    const roullete = await this.RoulleteRepository.findOneOrFail({
      where: {
        slug
      },
      relations: [
        "roulleteToProps.prop"
      ]
    });
    return roullete;
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
    return this.rtpRepository.insert(addPropToRoulleteDTO);
  }

  removeProp(rtpID: number){
    return this.rtpRepository.delete(rtpID);
  }

  async play(slug: string, userId: number) {
    const user = await this.userRepository.findOneOrFail({
      where: { id: userId }
    });

    const roullete = await this.RoulleteRepository.findOneOrFail({
      where: {
        slug
      },
      relations: [
        "roulleteToProps.prop"
      ]
    });

    if ( roullete.price > user.credits ){
      return {'message': 'You have not enough credits to play this roullete'}
    }

    const items = []
    const weights = []

    roullete.roulleteToProps.forEach(rtp => {
      items.push(rtp.prop);
      weights.push(rtp.weigth);
    })

    const prop = weightedRandom(items, weights).item as Prop
   
    user.credits -= roullete.price;
    await this.userRepository.save(user);

    const result = await this.propBasketRepository.update(
      {
        propSlug: prop.slug,
        userId,
      },
      {
        quantity: () => 'quantity + 1'
      }
    )
    if(result.affected != 0){
      return {
        'message': `Congrats You have won a ${prop.readableName}`,
        'result': result
      }
    }
    const basket = await this.propBasketRepository.insert(
      {
        propSlug: prop.slug,
        userId,
        quantity: 1
      }
    )
    return {
      'message': `Congrats You have won a ${prop.readableName}`,
      'result': basket
    }
  }
}
