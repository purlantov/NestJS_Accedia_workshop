import { ColorsController } from './colors/colors.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColorsModule } from './colors/colors.module';
import { RgbCmykService } from './shared/convert/rgb-cmyk.service';
import { ConvertModule } from './shared/convert/convert.module';

@Module({
  imports: [ColorsModule, ConvertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
