import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  constructor(public authService : AuthService) { }
    
  ngOnInit(): void {
    this.authService.getInfo()
    .subscribe(result => console.log(result));
  }
}
