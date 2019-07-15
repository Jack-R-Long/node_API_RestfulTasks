import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {
  @Input() tasktoShow: any; // use the @Input decorator to indicate this comes from the parent
  @Input() is_tasks: boolean; // use the @Input decorator to indicate this comes from the parent

  constructor() { }

  ngOnInit() {
  }

}
