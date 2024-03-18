import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropsService } from './props.service';
import { CreatePropDto } from './dto/create-prop.dto';
import { UpdatePropDto } from './dto/update-prop.dto';

@Controller('props')
export class PropsController {
  constructor(private readonly propsService: PropsService) {}

  @Post()
  create(@Body() createPropDto: CreatePropDto) {
    return this.propsService.create(createPropDto);
  }

  @Get()
  findAll() {
    return this.propsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.propsService.findOne(slug);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updatePropDto: UpdatePropDto) {
    return this.propsService.update(slug, updatePropDto);
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return this.propsService.remove(slug);
  }
}
