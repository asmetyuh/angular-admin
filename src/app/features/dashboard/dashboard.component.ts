import { Component, Injectable, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserInterface } from './interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user!: UserInterface;
  showText: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.currentUser.subscribe(u => {
      if(u?.id)
      {
        this.user = u;
        this.showText = true;

        setTimeout(() => {
          this.showText = false;
        }, 3000);
      }
    })
  }
}
