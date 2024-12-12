import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [NgClass],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    onSubmit(name: string, subject: string, body: string) {
        console.log("Name/Email/Body: ", name, subject, body);



        // window.open(`mailto:Emma Dempsey emmadempysey.professional@gmail.com?subject=${subject}&body=${body}`);

        // return "contact";
    }

    
    showValidation: WritableSignal<boolean> = signal(false);

    onFormSubmit(event: SubmitEvent) {
        this.showValidation.apply(true);
        console.log("Event: ", event);
        event.preventDefault();
        // event.stopPropagation();
    }

    onInput() {
        // this.showValidation.apply(false);
        console.log("input");
    }
}
