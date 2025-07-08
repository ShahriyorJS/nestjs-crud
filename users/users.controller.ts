import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { user } from './entities/user.entity';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("user")
  create(@Body() data: Partial<user>) {
    return this.usersService.create(data);
  }

  @Get("users")
  findAll() {
    return this.usersService.findAll();
  }

  @Get('user/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put('user/:id')
  update(@Param('id') id: string, @Body() data: Partial<user>) {
    return this.usersService.update(+id, data);
  }

  @Delete('user/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
