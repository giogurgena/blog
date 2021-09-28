import { Component, Input, OnInit } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input() size = '1x';
  faCircleNotch = faCircleNotch;
  constructor() {}

  ngOnInit(): void {}
}
