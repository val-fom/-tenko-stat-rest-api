import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // empty route returns 'Cannot Get null' in serverless mode
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
