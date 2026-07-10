import { Component, input } from '@angular/core';
import { GiftListItem } from './gift-list-item/gif-list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GiftListItem],
  templateUrl: './gif-list.html',
})
export class GiftList {
  gifs = input.required<Gif[]>();
}
