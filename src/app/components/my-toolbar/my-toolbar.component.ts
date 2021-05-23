import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'app-my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css'],
})
export class MyToolbarComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService
      .getIsLoading()
      .subscribe((isLoading) => (this.isLoading = isLoading));
  }
}
