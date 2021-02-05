<template>
    <ion-menu side="start">
        <ion-header>
            <ion-toolbar color="secondary">
                <ion-title>Left Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-label>START MENU CONTENTS</ion-label>
        </ion-content>
    </ion-menu>

</template>



<script>
    import {IonMenu,IonContent,IonLabel,IonToolbar,IonHeader,IonTitle} from '@ionic/vue';
    export default {
        components:{
            IonMenu,IonContent,IonLabel,IonToolbar,IonHeader,IonTitle
        },
        name: "left"
    };
</script>