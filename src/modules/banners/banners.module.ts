import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [BannersController],
  providers: [BannersService],
})
export class BannersModule {}
