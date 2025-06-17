import { NgClass, NgIf } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { VisualPortfolioCard } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

@Component({
  selector: 'app-portfolio-img',
  imports: [NgClass, NgIf],
  templateUrl: './portfolio-img.component.html',
  styleUrl: './portfolio-img.component.scss'
})
export class PortfolioImgComponent {
    @Input({required: false}) card: VisualPortfolioCard | undefined;


    @Input({required: false}) src!: string;
    @Input({required: false}) id!: string;
    @Input({required: false}) alt!: string;
    @Input({required: false}) date!: string;
    @Input({required: false}) description!: string;


    @Input({required: false}) className!: string;
    isActive: WritableSignal<boolean> = signal(false);

    onClick() {
        this.isActive.update((val) => !val);
    }
    onBlur() {
        this.isActive.set(false);
    }
}
