import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './entities/user.entity';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(user)
    private userRepo: Repository<user>
  ){}
  create(data: Partial<user>) {
   const user = this.userRepo.create(data)
   return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({where:{id}});
    if(! user) throw new NotFoundException("User not found")
    return user
  }

  async update(id: number, data: Partial<user>) {
    await this.userRepo.update(id, data)
    return this.userRepo.findOne({where: {id}})
  }

  async remove(id: number) {
    await this.userRepo.delete(id)
    return { delete: true}
  }
}
