import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const GET_NFTS_API = 'https://deep-index.moralis.io/api/v2/nft/';

@Injectable({
  providedIn: 'root'
})
export class BlockchainExplorerService {

  data: any;

  constructor(private http: HttpClient) { }

  getTransactions(url: string): Observable<any>{
    return this.http.get(url, BlockchainExplorerService.httpOptions());
  }

  getNativeBalance(url: string) {
    return this.http.get(url, BlockchainExplorerService.httpOptions());
  }

  getTokenBalance(url: string) {
    return this.http.get(url, BlockchainExplorerService.httpOptions());
  }

  getNfts(address: string) {
    return this.http.get(GET_NFTS_API + address, BlockchainExplorerService.httpOptions());
  }

  getNftTransfers(url: string) {
    return this.http.get(url, BlockchainExplorerService.httpOptions());
  }

  private static httpOptions() {
    const httpOptions: Object = {
      headers: new HttpHeaders({
        'x-api-key': ''
      }),
      responseType: 'json'
    };
    return httpOptions;
  }
}
