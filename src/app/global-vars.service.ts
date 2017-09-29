import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {

  constructor() { }

  public host = 'http://cityleng.dev/api/';
  public assetsPath ='http://cityleng.dev/public/';
}
