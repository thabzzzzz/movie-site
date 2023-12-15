<script setup>
    import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="ml-20 mb-20" >
            <h1 data-aos="fade-up"
     data-aos-duration="900">SWRV, your awesome movie browsing platform.</h1>
            <p data-aos="fade-up"
     data-aos-duration="1100" >SWRV is an online movie browsing platform dedicated to providing you with the latest and freshest film releases. There are multiple genres to choose from, whether its rock or hip-hop, we got you covered. Explore our collection through the navigation bar above to start discovering new and exciting tracks! </p>
        </div>
        <div class="ml-20">
           <img src="../assets/gallery/tv.png" alt="">
        
        </div>
       
    </div>
    <Footer/>
</template>

<style scoped>
    h1{
        font-family: satoshi;
        font-size: 50px;
    }
</style>