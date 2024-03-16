import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropDto: UpdatePropDto) {
    return this.propsService.update(+id, updatePropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propsService.remove(+id);
  }
}
