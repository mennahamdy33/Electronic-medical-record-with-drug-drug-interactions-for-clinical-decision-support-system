<template>

    <div class="container">
        <ul class="progressbar">
            <li class="active">login</li>
            <li >choose interest</li>
            <li>add friends</li>
            <li>View map</li>
        </ul>
    </div>


</template>

<script>
    import { defineComponent } from 'vue';
    // import { IonContent } from '@ionic/vue';
    export default defineComponent({
        name: 'ProgressBar',

        components: {

            // IonContent
        },
        methods: {

        }
    });
</script>

