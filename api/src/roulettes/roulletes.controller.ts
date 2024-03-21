import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { RoulletesService } from './roulletes.service';
import { CreateRoulleteDto } from './dto/create-roullete.dto';
import { UpdateRoulleteDto } from './dto/update-roullete.dto';
import { AddPropToRoulleteDTO } from './dto/add-prop-to-roullete.dto';

@Controller('roulletes')
@UseInterceptors(ClassSerializerInterceptor)
export class RoulletesController {
  constructor(private readonly RoulletesService: RoulletesService) {}

  @Post()
  create(@Body() createRoulleteDto: CreateRoulleteDto) {
    return this.RoulletesService.create(createRoulleteDto);
  }

  @Get()
  findAll() {
    return this.RoulletesService.findAll();
  }

  @Post('add-prop')
  addProp(
    @Body() addPropToRoulleteDTO: any,
    ) {
    return this.RoulletesService.addProp(addPropToRoulleteDTO);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.RoulletesService.findOne(slug);
  }

  @Patch(':slug')
  update(
    @Param('slug') slug: string,
    @Body() updateRoulleteDto: UpdateRoulleteDto,
  ) {
    return this.RoulletesService.update(slug, updateRoulleteDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.RoulletesService.remove(slug);
  }

 

  @Delete('removeProp/:rtpID')
  removeRoulleteToProp(@Param('rtpID') rtpID: number) {
    return this.RoulletesService.removeProp(rtpID);
  }

  @Get(':slug/play/:userId')
  play(@Param('slug') slug: string, @Param('userId') userId: number) {
    return this.RoulletesService.play(slug, userId);
  }
}
