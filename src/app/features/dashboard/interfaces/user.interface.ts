import {TransactionInterface} from "./transaction.interface";

export interface UserInterface {
  id: number;
  name: string;
  transactions: TransactionInterface[];
}