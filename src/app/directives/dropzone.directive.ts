import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  constructor() { }

  @Output() dropped = new EventEmitter<File>();
  @Output() hovered = new EventEmitter<boolean>();

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  ondragleave($event) {
    $event.preventDeafult();
    this.hovered.emit(false);
  }

}
