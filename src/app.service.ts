import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async sendMessageToExchange(message: any): Promise<void> {
    const parsedData = JSON.parse(JSON.stringify(message));
    await this.amqpConnection.publish(
      'prospecting-company-export-exchange',
      'prospecting',
      parsedData,
    );
  }
}
