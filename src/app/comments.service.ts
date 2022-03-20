import { Injectable } from '@angular/core';
import { Data } from './model';
import { default as data } from '../data.json';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  loadData(): Promise<Data> {
    return new Promise<Data>((resolve) => resolve(data));
  }
  constructor() {}
}
