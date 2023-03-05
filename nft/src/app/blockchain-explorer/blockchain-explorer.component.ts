import {Component} from '@angular/core';
import {BlockchainExplorerService} from "./service/blockchain-explorer.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-blockchain-explorer',
  templateUrl: './blockchain-explorer.component.html',
  styleUrls: ['./blockchain-explorer.component.css']
})
export class BlockchainExplorerComponent {

  form: FormGroup;
  data: any;
  p: number = 1;

  constructor(private fb: FormBuilder, private service: BlockchainExplorerService) {
    this.form = this.fb.group({
      address: ''
    })
  }

  getTransactions(): any {
    this.service.getTransactions('https://deep-index.moralis.io/api/v2/' + this.form.get('address')?.value + '/erc20/transfers').subscribe((response: any) => {
      this.data = response;
    });
  }

  getNativeBalance(): any {
    this.service.getNativeBalance('https://deep-index.moralis.io/api/v2/' + this.form.get('address')?.value + '/balance').subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });
  }

  getTokenBalance(): any {
    this.data = this.service.getTokenBalance('https://deep-index.moralis.io/api/v2/' + this.form.get('address')?.value + '/erc20').subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });
  }

  getNfts(): any {
    this.data = this.service.getNfts(this.form.get('address')?.value).subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });
  }

  getNftTransfers(): any {
    this.data = this.service.getNftTransfers('https://deep-index.moralis.io/api/v2/' + this.form.get('address')?.value + '/nft/transfers').subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });
  }
}
