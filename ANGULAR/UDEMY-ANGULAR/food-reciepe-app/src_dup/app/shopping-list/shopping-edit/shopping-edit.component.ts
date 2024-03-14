import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientModel } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameElement', { static: true }) nameElementRef: ElementRef;
  @ViewChild('amountElement', { static: true }) amountElementRef: ElementRef;
  @Output() addIngredient = new EventEmitter<IngredientModel>();

  onAdd() {
    const name = this.nameElementRef.nativeElement.value;
    const amount = this.amountElementRef.nativeElement.value;
    this.addIngredient.emit({ name, amount });
  }
}
