import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'prospecting-company-export-exchange',
          type: 'direct',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: true },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
