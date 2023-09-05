import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  selector: 'helderberg-pirates-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imagePath = 'assets/images/baseball-sticker.svg';
}
