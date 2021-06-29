import { Component, OnInit , Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAdmin = false;
  isLogged = false;
  private subscription: Subscription = new Subscription;

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private authSvc:AuthService) { }
  

  ngOnInit(): void {
    this.subscription.add(
    this.authSvc.isLogged.subscribe((res) => (this.isLogged = res))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggleSidenav(): void{
    this.toggleSidenav.emit();
  }
  onLogout(){
    this.authSvc.logout();
  }
}
