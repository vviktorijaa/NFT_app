import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-coin-gecko',
  templateUrl: './coin-gecko.component.html',
  styleUrls: ['./coin-gecko.component.css']
})
export class CoinGeckoComponent {

  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
