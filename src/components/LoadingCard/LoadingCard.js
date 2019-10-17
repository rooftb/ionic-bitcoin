import React, { Component } from "react";
import { IonCard, IoCardHeader, IonCardTitle, IonCardSubtitle, IonSkeletonText, IonCardHeader } from '@ionic/react';
import './LoadingCard.css';

const LoadingCard = () => (
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText animated className="loading-card__currency-name"></IonSkeletonText>
            </IonCardSubtitle>
            <IonSkeletonText animated className="loading-card__currency-value"></IonSkeletonText>
        </IonCardHeader>
    </IonCard>
);

export default LoadingCard;