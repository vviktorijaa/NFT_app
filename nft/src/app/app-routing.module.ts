import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoinGeckoComponent} from "./coin-gecko/coin-gecko.component";
import {MetaMaskComponent} from "./meta-mask/meta-mask.component";
import {NftComponent} from "./nft/nft.component";
import {BlockchainExplorerComponent} from "./blockchain-explorer/blockchain-explorer.component";

const routes: Routes = [
  { path: '', component: BlockchainExplorerComponent, title: 'Blockchain Explorer' },
  { path: 'coinGecko', component: CoinGeckoComponent, title: 'CoinGecko'},
  { path: 'metaMask', component: MetaMaskComponent, title: 'MetaMask'},
  { path: 'nft', component: NftComponent, title: 'NFT' },
  { path: 'blockchainExplorer', component: BlockchainExplorerComponent, title: 'Blockchain Explorer'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
