import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-contact',
    imports: [NgClass],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    showFormValidation: WritableSignal<boolean> = signal(false);

    isNameValid: WritableSignal<boolean> = signal(false);
    nameInputClasses = computed(() => ({
        'is-invalid': (this.showFormValidation() && !this.isNameValid())
    }));

    isSubjectValid: WritableSignal<boolean> = signal(false);
    subjectInputClasses = computed(() => ({
        'is-invalid': (this.showFormValidation() && !this.isSubjectValid())
    }));

    isMessageValid: WritableSignal<boolean> = signal(false);
    messageInputClasses = computed(() => ({
        'is-invalid': (this.showFormValidation() && !this.isMessageValid())
    }));

    isFormValid = computed(() => this.isNameValid() && this.isSubjectValid() && this.isMessageValid());

    onFormSubmit(event: SubmitEvent, nameValue: string, subjectValue: string, messageValue: string) {
        console.log("message: ", messageValue);

        this.isNameValid.set(nameValue !== "");
        this.isSubjectValid.set(subjectValue !== "");
        this.isMessageValid.set(messageValue !== "");
        this.showFormValidation.set(true);

        console.log("Is form valid: ", this.isFormValid());

        if (this.isFormValid()) {
            const NEW_LINE = "%0D%0A";
            window.open(`mailto:Emma Dempsey emmadempysey.professional@gmail.com?subject=${subjectValue}&body=${messageValue.replace(/\r\n|\r|\n/g, NEW_LINE)}${NEW_LINE+NEW_LINE}Sent by: ${nameValue}`);
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    onInput() {
        this.showFormValidation.set(false);
        console.log("input");
    }
}
