import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['app', 'class', 'style', 'tags', 'function', 'div'];
  }
};