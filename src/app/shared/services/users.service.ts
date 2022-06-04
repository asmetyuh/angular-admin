import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserInterface } from "src/app/features/dashboard/interfaces/user.interface";

@Injectable({
    providedIn: 'root'
  })
export class UsersService {
    currentUser: BehaviorSubject<UserInterface> = new BehaviorSubject<UserInterface>({} as UserInterface);

    constructor() {}
}