<template>
    <router-view :key="$route.fullPath"></router-view>
</template>
<script>
    export default {
        mounted() {
            this.$store.dispatch('auth/init')
        },
    }
</script>
<style>
    @import '~nprogress/nprogress.css';

    @media print {
        body * {
            visibility: hidden;
        }

        .printable,
        .printable * {
            visibility: visible;
        }

        .printable {
            position: absolute;
            left: 0;
            top: 0;
        }

        .printable a {
            text-decoration: none;
            color: #000;
        }
    }

    #nprogress .bar {
        background: rgb(182, 27, 27);
        z-index: 1038;
    }

    #nprogress .spinner {
        display: none;
    }
</style>