import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();


  emitValue( txtInput : string ): void {
    console.log("Desde el Emit");
    if( txtInput.length === 0 ) return;
    this.onValue.emit(txtInput);
  }
  
  
}
