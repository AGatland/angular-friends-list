import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input('person') person: string = "";
  @Output('addFavorite') addFavorite = new EventEmitter<String>();
  @Output('remFavorite') remFavorite = new EventEmitter<String>();
}
