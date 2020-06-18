import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/Color';
 
@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private httpClient: HttpClient) { }

  allColors() {
    return this
      .httpClient
      .get<Color[]>(
        'http://localhost:3060/colors',
      );
  }

  appendColor(color: Color) {
    return this
      .httpClient
      .post<Color>(
        'http://localhost:3060/colors',
        color,
      );
  }

  removeColor(colorId: number) {
    return this
      .httpClient
      .delete<void>(
        `http://localhost:3060/colors/${encodeURIComponent(colorId)}`,
      );
  }
}
