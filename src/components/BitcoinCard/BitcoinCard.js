import React, { Component } from "react";
import { IonCard, IoCardHeader, IonCardTitle, IonCardSubtitle, IonSkeletonText, IonCardHeader } from '@ionic/react';
import './BitcoinCard.css';

const BitcoinCard = (props) => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                {props.data.code}
            </IonCardSubtitle>
            <IonCardTitle>
                {props.data.rate_float}
            </IonCardTitle>
        </IonCardHeader>
    </IonCard>
);

export default BitcoinCard;