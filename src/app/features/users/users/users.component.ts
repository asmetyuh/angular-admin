import { AfterViewInit, Component, Injectable, ViewChild } from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { UsersService } from 'src/app/shared/services/users.service';
import { usersDataMock } from 'testing/mocks/userDataMock';
import { UserInterface } from '../../dashboard/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  data = new MatTableDataSource<UserInterface>(usersDataMock);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usersService: UsersService) { }

  ngAfterViewInit(): void {
    this.data.paginator = this.paginator;
    this.usersService.currentUser.next(this.data.data[this.data.data.length - 1]);
  }

}
