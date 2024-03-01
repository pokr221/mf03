<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: String,
  ptsCount: Number,
  gameCount: Number
}
)




</script>


<template>
 <div class="cardres mt-2">
  
    <table class="table-fixed mt-2">
  <!-- <thead>
   <tr>
      <th class="border-b ">Команда</th>
      <th class="border-b  ">Игры</th>
      <th class="border-b ">Очки</th>
    </tr>
  </thead> -->
  <tbody class="items-center text-center">
    <tr>
      <td width="70%" class="text-center box-border">
        <div class="border-b ">{{ title }}</div>
      </td>
      <td width="30%" class="box-border">
        <div class="border-b ">
            {{ gameCount }}
        </div>

      </td>
      <td width="15%" class="">
        <div class="border-b ">
            {{ ptsCount }}
        </div>

      </td>   

      
      </tr>
   
    
  </tbody>
    </table>
  <!-- <div class="grid-cols-3 flex gap-2 text-sm">
    
    <div class="bg-white min-w-40 flex p-2 pl-3 gap-2 border-b">
      <img class="w-4 h-4" src="../assets/date.png" alt="">
      {{title}}
    </div>
    <div  class="bg-white min-w-[150px] max-w-[231px] pl-4 flex items-center box-content border-b">
        {{home}}
      <img class="w-4 h-4 mr-2 ml-auto" src="../assets/form.png" alt="">
    </div>
    <div v-if="homeScore>visitScore" class="flex items-center bg-blue-600  text-white text-base font-bold pl-4 min-w-10">{{ homeScore }}</div>
    <div v-else class="flex items-center bg-indigo-950  text-white text-base font-bold pl-4 min-w-10">{{ homeScore }}</div>
    
    <div v-if="homeScore<visitScore" class="flex items-center bg-blue-600  text-white text-base font-bold pl-4 min-w-10">{{ visitScore }}</div>
    <div v-else="homeScore<visitScore" class="flex items-center bg-indigo-950  text-white text-base font-bold pl-4 min-w-10">{{ visitScore }}</div>
    
    <div class="bg-white min-w-[150px] max-w-[231px] flex items-center box-content pr-2 border-b pl-2">
      
      <img class="w-4 h-4 mr-auto ml-0" src="../assets/form-black.png" alt="">
      <div class="mr-4">{{visit}}</div>
      
      
    </div>

    <div class=" bg-white flex min-w-[150px]  box-content pr-2 border-b pl-2 items-center">
      <div class="ml-4">{{leauge}}</div>
      <img class=" w-4 h-4  mr-0 ml-auto" :src=LeagueLogo alt="">
    </div>
    
  </div> -->
  

</div>



 
</template>

<style>
.cardres{
  /* font-family: 'Andika', 'Arial', sans-serif;'Comfortaa' */
  font-family:'Didact Gothic', sans-serif;
  font-variant-numeric: slashed-zero;}
.scores {
  display: none;
  
}
.btnNavigate {
  background-color: #353f49;
  width: 9rem;
  height: 2rem;
  border-radius: 6px;
  color: aliceblue;
}
.btnNavigate:hover{
  background-color: #909eac;
  transition: 1ms;
  transform: inherit;

}
.btnNavigate:focus{
  background-color: #909eac;
  transition: 1ms;
  transform: inherit;

}

</style>