import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('publish')
  async publishMessage(): Promise<string> {
    try {
      await this.appService.sendMessageToExchange({
        pattern: 'prospecting-company-export',
        data: { name: 'Its a secret ;)' },
      });
    } catch (error) {
      console.error('Error publishing message:', error);
    }

    return 'messaged published!';
  }
}
