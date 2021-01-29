<template>




    <ion-button expand="full" fill="clear" type="submit"  >
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div class="text">Submit</div>

    </ion-button>



</template>

<script>
    import { defineComponent } from 'vue';
    import { IonButton } from '@ionic/vue';
    export default defineComponent({
        name: 'FormButton',
        components: {
            IonButton,

        },
        methods: {

        }
    });
</script>
