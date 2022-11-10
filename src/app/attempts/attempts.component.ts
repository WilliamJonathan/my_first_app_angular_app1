import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Heart } from 'src/shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {

  @Input() public attempts: number

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true)
  ]

  constructor() { }

  ngOnChanges(): void {
    if(this.attempts !== this.hearts.length) {
      let index = this.hearts.length - this.attempts

      this.hearts[index - 1].full = false
    }
  }

  ngOnInit(): void {
  }

}
