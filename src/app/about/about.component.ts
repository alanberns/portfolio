import { Component } from '@angular/core';
import { CircleProgressWrapperModule } from '../circle-progress-wrapper.module';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CircleProgressWrapperModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  progressValue = 0;

  ngOnInit() {
    setInterval(() => {
      this.progressValue = Math.min(this.progressValue + 1, 100);
    }, 100);
  }
}
