import { Injectable } from '@angular/core';  

declare let ga: Function;

@Injectable()
export class GenericUtilities 
{
  result: any;
  foundDate: any;
  configurationData: any;
  res: any[] = [];

  constructor() { }

  /**
   * Method to handle and send to the google analytics if the error occurs in the application
   */
  public errorHandler(err) 
  {
      // IMPLEMENTS    
  }
}
