import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async createImage(url: string, userId: number): Promise<Image> {
    const newImage = this.imageRepository.create({ url, user: { id: userId } });
    return await this.imageRepository.save(newImage);
  }
}