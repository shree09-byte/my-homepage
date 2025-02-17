import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intelligent-agents-card',
  imports: [],
  templateUrl: './intelligent-agents-card.component.html',
  styleUrl: './intelligent-agents-card.component.css',
})
export class IntelligentAgentsCardComponent {
  @Input() title: string = 'Intelligent Agents to Optimize your Reach';
  @Input() description: string =
    'Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently.';

  titleGradient =
    'linear-gradient(89.99deg, rgba(255,255,255,1) 0.01%, rgba(92,115,174,1) 130.3%)';
}
