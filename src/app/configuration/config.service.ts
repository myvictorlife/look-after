import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import Config from '../../assets/config.json';

@Injectable()
export class ConfigService 
{
  private config: any;

  constructor() { }

  load() 
  {
    if(!this.config)
      this.config = Configuration;

    this.config.baseUrl = Config.baseUrl;
    this.config.LoginUrl = Config.LoginUrl;
  }

  getConfiguration(): Configuration 
  {
    return this.config;
  }
}
