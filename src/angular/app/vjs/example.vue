<template>
    <div class= ''>
        <h1 class='new-class'>{{ title }}</h1>
        <button @click='someClickTest'>VueJS button!</button>
    </div>
</template>

<script>
export default {
    name: 'example',
    components: {

    },
    data(){
        return {
            title: 'VueJS Counter',
            clicks: 0
        };
    },
    methods: {
        someClickTest() {
            this.clicks += 1;
            this.title = 'VueJS: Clicked ' + this.clicks + ' times';
        }
    }
}
</script>