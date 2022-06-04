import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IVisitor } from 'src/app/shared/interfaces/visitor.interface';
import { TransactionInterface } from './interfaces/transaction.interface';
import { UserInterface } from './interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  visitors: IVisitor[] = [];
  currentVisitor!: IVisitor;
  phone!: number;

  someDate!: string;

  transact: TransactionInterface[] = [{
    id: 1,
    name: 'someName1'
  },
  {
    id: 3,
    name: 'someName3'
  }];

  user: UserInterface = {} as UserInterface;

  arrayWithThreeStrings: string[] = [
    'First',
    'Second',
    'Third'
  ]

  copyByReference: string[] = []

  copyByValue: string[] = []

  includes: boolean[] = [];
  every!: boolean;
  some!: boolean;
  foreach!: boolean;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentVisitor = { ...this.visitors[0] };

    const date = new Date(2002, 3, 26);

    this.someDate = this.getFormatDate(date, this.formatDate);

    this.updateUser();

    this.copyByReference = this.arrayWithThreeStrings;
    this.copyByValue = [...this.arrayWithThreeStrings];
    this.subtaskD();
  }


  formatDate = (date: Date): string => {
    return `${this.datePipe.transform(date, 'MM.dd.yyyy hh:mm a')}`;
  }

  updateUser(): void {
    this.user.transactions =
      [...this.transact,
      {
        id: 2,
        name: 'someName2'
      }];
  }

  private getFormatDate(date: Date, callback: any): string {
    return callback(date);
  }

  private subtaskD(): void {
    this.includes = this.arrayWithThreeStrings.map(a => a.includes('ir'));

    this.every = this.arrayWithThreeStrings.every(a => a.length > 4);

    this.some = this.arrayWithThreeStrings.some(a => a.length > 9);

    debugger;
    this.arrayWithThreeStrings.forEach(a => {
      const ind = this.arrayWithThreeStrings.indexOf(a);
      this.arrayWithThreeStrings[ind] = a + '1';
    });

    this.arrayWithThreeStrings = this.arrayWithThreeStrings.map(a => a.replace('ir', 'es'));
  }
}
