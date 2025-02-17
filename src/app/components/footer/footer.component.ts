import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  utilities = [
    { text: 'Home', link: '#' },
    { text: 'Products', link: '#' },
    { text: 'Tools', link: '#' },
    { text: 'Contact Us', link: '#' },
  ];

  socials = [
    { text: 'X', link: '#' },
    { text: 'LinkedIn', link: '#' },
    { text: 'Instagram', link: '#' },
    { text: 'Facebook', link: '#' },
  ];

  contactInfo = {
    email: 'contact@adtask.ai',
    location: 'San Francisco Bay Area',
  };
}
