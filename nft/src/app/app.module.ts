import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoinGeckoComponent } from './coin-gecko/coin-gecko.component';
import { MetaMaskComponent } from './meta-mask/meta-mask.component';
import { NftComponent } from './nft/nft.component';
import { BlockchainExplorerComponent } from './blockchain-explorer/blockchain-explorer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinGeckoComponent,
    MetaMaskComponent,
    NftComponent,
    BlockchainExplorerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
