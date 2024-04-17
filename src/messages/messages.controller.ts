import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Get('/:id')
  getMessage() {}

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
}
