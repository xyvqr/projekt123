import { Component, OnInit,  ElementRef, ViewChild, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class OpinieComponent implements OnInit {
  @ViewChild('opinie') input: ElementRef<HTMLInputElement>;
  comments: any[] = ["Przykładowy komentarz 1"];
  people: any[] = [
  ];
constructor() {
  this.comments.push("Przykładowy komentarz 2");
 }

trackItem (index: number) {
  return "item.trackId";
}

add(e) {
  this.comments.push(this.input.nativeElement.value);
  console.log(this.input.nativeElement.value);
  this.input.nativeElement.value = "";
}
ngOnInit(): void {
}

}
