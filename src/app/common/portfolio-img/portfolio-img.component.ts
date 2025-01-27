import { NgClass } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-portfolio-img',
  imports: [NgClass],
  templateUrl: './portfolio-img.component.html',
  styleUrl: './portfolio-img.component.scss'
})
export class PortfolioImgComponent {
    @Input({required: true}) src!: string;
    @Input({required: true}) id!: string;
    @Input({required: true}) alt!: string;
    @Input({required: false}) className!: string;
    @Input({required: true}) date!: string;
    @Input({required: true}) description!: string;
    isActive: WritableSignal<boolean> = signal(false);

    onClick() {
        this.isActive.update((val) => !val);
    }
    onBlur() {
        this.isActive.set(false);
    }
}
