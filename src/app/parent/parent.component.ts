import { Component, OnInit } from '@angular/core';
import { constants } from '../constants';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childOneArray: any = constants.numberArrayOne;
  childTwoArray: any = constants.numberArrayTwo;
  childOneBoolean: boolean = true
  childTwoBoolean: boolean = true
  constructor() {
  }
  ngOnInit(): void {
    this.shuffleAtTheStart()
  }
  shuffleAtTheStart(){
    this.childOneArray=this.shuffle(this.childOneArray)
    this.childTwoArray=this.shuffle(this.childTwoArray)
  }
  shuffleArray() {
    if (!this.childOneBoolean) {
      this.childOneArray=this.shuffle(this.childOneArray)
      this.childOneBoolean = true
    }
    else {
      this.childTwoArray=this.shuffle(this.childTwoArray)
      this.childTwoBoolean = true
    }
  }
  sortArray() {
    if (this.childOneBoolean) {
      this.childOneArray=this.sort(this.childOneArray)
      this.childOneBoolean = false
    }
    else {
      this.childTwoArray=this.sort(this.childTwoArray)
      this.childTwoBoolean = false
    }
  }
  shuffle(array:any){
    return array.sort(() => Math.random() - 0.5)
  }
  sort(array:any){
    return array.sort((a: any, b: any) => a.number - b.number);
  }
}
