import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private async generateId() {
    const { v4: uuidv4 } = await import('uuid');
    return uuidv4();
  }

  async getHello(): Promise<string> {
    return this.generateId();
  }
}
