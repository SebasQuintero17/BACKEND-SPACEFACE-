//// src/image/image.controller.ts
import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { ImageService } from './image.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  async uploadImage(
    @Body('url') url: string,
    @Request() req
  ) {
    const userId = req.user.userId;
    return await this.imageService.createImage(url, userId);
  }
}
