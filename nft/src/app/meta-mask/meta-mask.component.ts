import {Component} from '@angular/core';
import {WindowRefService} from "../window-ref-service/window-ref.service";

@Component({
  selector: 'app-meta-mask',
  templateUrl: './meta-mask.component.html',
  styleUrls: ['./meta-mask.component.css']
})
export class MetaMaskComponent {

  ethereum: any;
  accounts: any;

  constructor(private winRef: WindowRefService) {
    this.ethereum = winRef.window.ethereum;
  }

  connect(): void {
    if (typeof this.ethereum !== 'undefined') {
      this.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: any) => {
          this.accounts = accounts[0];
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }
}
