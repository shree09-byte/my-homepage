import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Input() width1: number = 185;
  @Input() height1: number = 48;
  particle1: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CLcI9nxTWt8i6C/particle.png';
  particle2: string =
    'https://dashboard.codeparrot.ai/api/image/Z7CLcI9nxTWt8i6C/particle-2.png';
  name: string = 'John Doe';
  email: string = 'john.doe@example.com';
  message: string = 'Hello, I have a question about your services.';

  onSubmit() {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
}
