import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/service/transaction.service';
import { TransactionItem } from '../transaction-item/TransactionItem';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: TransactionItem[];

  constructor(
    private transactionService: TransactionService
    ) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService
      .getTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }


}