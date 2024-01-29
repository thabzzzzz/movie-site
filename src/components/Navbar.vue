<template>
  

<nav class="bg-white mb-10">
  <div class="max-w-100 flex flex-wrap items-center justify-between mx-auto p-4">
    <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        
        <span class="site-logo"><img src="../assets/gallery/Logo1.png" alt=""></span>
    </router-link>
   
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse   bg-white">
        <li class="a">
          <router-link to="/" class="block py-2 px-3   rounded md:bg-transparent md:p-0 nav " aria-current="page">Home</router-link> 
        </li>
       
        <li class="a">
          <router-link to="/movies" class="block py-2 px-3    md:p-0  " aria-current="page">Movies</router-link> 
        </li>
      
      </ul>
    </div>
  </div>
</nav>

</template>

<script setup lang="ts">

</script>

<style scoped>
 .site-logo{
  width: 150px;
  height: 70px;
 }
 .a:after {
  display:block;
  content: '';
  border-bottom: solid 3px var(--orange);  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}
.a:hover:after { transform: scaleX(1); }

@media (max-width: 760px) {
    .flex-wrap {
      flex-direction: column;
      align-items: center;
    }

    .site-logo {
      margin-bottom: 10px; /* Add some space between logo and nav items */
    }

    .hidden.md\:block {
      display: block !important; /* Override Tailwind's utility class */
      width: 100%;
    }
    .font-medium.flex.flex-col.p-4.md\:p-0.md\:flex-row.md\:space-x-8.rtl\:space-x-reverse.bg-white {
      flex-direction: row;
      justify-content: center;
    }

    .font-medium.flex.flex-col.p-4.md\:p-0.md\:flex-row.md\:space-x-8.rtl\:space-x-reverse.bg-white li {
      margin-bottom: 0; /* Remove margin between list items */
    }
  }

</style>