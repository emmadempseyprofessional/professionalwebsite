import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { BackToTopComponent } from '@common/back-to-top/back-to-top.component';

@Component({
    selector: 'app-writing-portfolio',
    imports: [BackToTopComponent, NgClass],
    templateUrl: './writing-portfolio.component.html',
    styleUrl: './writing-portfolio.component.scss'
})
export class WritingPortfolioComponent {
    selection: WritableSignal<SelectedWriting> = signal(SelectedWriting.None);

    get SelectedWriting(): typeof SelectedWriting {
        return SelectedWriting;
    }

    onSelectWriting(writing: SelectedWriting) {
        this.selection.set(writing);
    }
}

enum SelectedWriting {
    None,
    Shawshank,
    Dali,
    Entrepreneurship
}
