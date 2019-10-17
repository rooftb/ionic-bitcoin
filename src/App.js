import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from "@ionic/react";
import { logoBitcoin } from "ionicons/icons";
import { getBitcoinPrice } from "./api/Bitcoin";
import LoadingCard from "./components/LoadingCard/LoadingCard";
import BitcoinCard from "./components/BitcoinCard/BitcoinCard";
import Interval from "react-interval-rerender";

class App extends Component {
  state = {
    bitcoinInfo: {},
    loading: true
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinPrice();

    this.setState(
      {
        bitcoinInfo,
        loading: false
      },
      () => console.log(this.state)
    );
  }

  createLoadingCards() {
    return (
      <>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </>
    );
  }

  createBitcoinCards(bitcoinInfo) {
    return Object.keys(bitcoinInfo.bpi).map((item, index) => (
      <BitcoinCard data={bitcoinInfo.bpi[item]} />
    ));
  }

  render() {
    const { bitcoinInfo, loading } = this.state;
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="bitcoin-title" color="light">
              Bitcoin Price Tracker
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <section className="bitcoin-header">
            <IonIcon className="bitcoin-logo" icon={logoBitcoin} />
          </section>
          {loading === true
            ? this.createLoadingCards()
            : this.createBitcoinCards(bitcoinInfo)}
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
