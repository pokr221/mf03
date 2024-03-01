<script setup>
import { ref, onMounted } from 'vue'
defineProps({
  home: String,
  visit: String,
  homeScore: Number,
  visitScore: Number,
  date: String,
  leauge: String,
  LeagueLogo:String,
  
  
  
}
)




</script>


<template>
  
<div class="cardres mt-2">
  
  
  <div class="grid-cols-6 flex gap-2 text-sm">
    
    <div class="bg-white min-w-40 flex p-2 pl-3 gap-2 border-b">
      <img class="w-4 h-4" src="../assets/date.png" alt="">
      {{date}}
    </div>
    <div  class="bg-white min-w-[150px] max-w-[231px] pl-4 flex items-center box-content border-b">
        {{home}}
      <img class="w-4 h-4 mr-2 ml-auto" src="../assets/form.png" alt="">
    </div>
    <div v-if="homeScore>visitScore" class="flex items-center bg-blue-600  text-white text-base font-bold pl-4 min-w-10">{{ homeScore }}</div>
    <div v-else  class="flex items-center bg-indigo-950  text-white text-base font-bold pl-4 min-w-10">{{ homeScore }}</div>
    
    <div v-if="homeScore<visitScore" class="flex items-center bg-blue-600  text-white text-base font-bold pl-4 min-w-10">{{ visitScore }}</div>
    <div v-else class="flex items-center bg-indigo-950  text-white text-base font-bold pl-4 min-w-10">{{ visitScore }}</div>
    
    

    <div class="bg-white min-w-[150px] max-w-[231px] flex items-center box-content pr-2 border-b pl-2">
      
      <img class="w-4 h-4 mr-auto ml-0" src="../assets/form-black.png" alt="">
      <div class="mr-4">{{visit}}</div>
      
      
    </div>
    <div class=" bg-white flex min-w-[150px]  box-content pr-2 border-b pl-2 items-center">
      <div class="ml-4">{{leauge}}</div>
      <img class=" w-4 h-4  mr-0 ml-auto" :src=LeagueLogo alt="">
    </div>
    
  </div>
  <div class=" text-xs scores">
    <div class="w-full grid-cols-2 flex gap-2 text-sm">
      <div class="w-64 ml-2">
      Голы:
      Иванов-2
      Петвров-2
    </div>
    <div class="w-64 ml-20">
      Голы:
      Иванов-2
      Петвров-2
    </div>
    </div>
    
  </div>
  <!-- <div class="bg-gray-100 grid-cols-6 mt-2 flex gap-2 text-sm">
    
    <div class="w-30  p-2 ">24/04/2024</div>
    <div class="w-40  flex  p-2 gap-2 box-content ">
        Тивиком
      <img class=" w-3 h-4" src="../assets/36army.jpg" alt="">
    </div>
    <div class="flex items-center bg-indigo-900 text-white font-bold px-3 w-10">1</div>
    <div class="flex items-center bg-indigo-900 text-white font-bold px-3 w-10">3</div>
    <div class="w-40 flex items-center pl-5 gap-2 bg-gray-100 box-content ">
      36-Армия
      <img class=" w-3 h-4" src="../assets/36army.jpg" alt="">
      
    </div>
    <div class="w-40 bg-gray-100 p-2 px-auto ">СУПЕРЛИГА</div>
    
  </div> -->
  <!-- <div class="bg-gray-100 grid grid-flow-col auto-cols-max mt-1 items-center">
    <div class="flex text-center px-5 box-border text-center">24/02/2024</div>
    <div class="min-w-32 px-5 text-center flex gap-5  box-border items-center">
            <div class="w-24:text-xs">
              БайкалАвтоТрак
            </div> 
            <div class="overflow-hidden rounded-2xl w-4 pt-0 bg-gray-100">
              <img class="w-6" src="../assets/36army.jpg" alt="">
            </div>
    </div>
    <div class="bg-indigo-950 text-white h-10 w-10 p-3 box-border">2</div>
    <div class="bg-blue-500  text-white h-10 w-10 p-3 box-border ml-1 ">3</div>
    <div class="min-w-64 flex gap-3 bg-gray-100 box-border items-center p-2">
                <div class="ml-4 overflow-hidden rounded-2xl w-4 pt-0 bg-gray-100">
                  <img class="w-6" src="" alt="">
                </div>
                <div>
                  Улан-Удэ City
              </div> 
                
             </div>
    <div class="text-sm text-center px-5">СУПЕРЛИГА</div>
    
  </div> -->
  <!-- <div class="font-bold border-b-2 border-black flex gap-60 pl-8">
    <div>Дата</div>
    <div class="">Результат</div>
    <div class="">Лига</div>

  </div>
  <table class="table-fixed mt-2">
  <thead>
   <tr>
      <th class="border-b-2 border-black">Дата</th>
      <th class="border-b-2 border-black ">Результат</th>
      <th class="border-b-2 border-black">Лига</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="10%" class="text-center box-border">
        <div class="flex  text-center px-5 box-border">24/02/2024</div>
      </td>
      <td width="10%" class="box-border">
        <div class="px-5 text-center flex gap-5 bg-gray-100 box-border items-center">
            <div>
              36 Армия
            </div> 
            <div class="overflow-hidden rounded-2xl w-4 pt-0 bg-gray-100">
              <img class="w-6" src="../assets/36army.jpg" alt="">
            </div>
        </div>

      </td>
      <td  class="box-border text-center w-15 h-10">
        <div class="flex bg-gray-100  px-5 box-border">
              <div class="bg-indigo-950 text-white w-10 h-5 box-border">2</div>
              <div class="bg-blue-500  text-white  w-10 h-5 box-border ">3</div>
        </div>

      </td>
      <td width="10%" class="box-border">
        <div class="flex gap-3 bg-gray-100 box-border items-center">
                <div class="overflow-hidden rounded-2xl w-4 pt-0 bg-gray-100">
                  <img class="w-6" src="../assets/36army.jpg" alt="">
                </div>
                <div>
                  Улан-Удэ City
              </div> 
                
             </div>

      </td>


      
      <td width="10%" class="text-sm text-center px-5">СУПЕРЛИГА</td>
    </tr>
   
    
  </tbody>
</table>  -->

  <!-- <div class="w-4/5 flex ml-20 my-1 cardres ">
  <div class="bg-gray-100 w-60 py-3 pl-5  h-10 box-border ">24/02/2024</div>
  <div class="flex gap-3 bg-gray-100 w-60 py-2 pl-5 h-10 box-border items-center">36 Армия
    <div class="overflow-hidden w-6 h-6 pt-0 bg-gray-100">
      <img class="w-6" src="../assets/vue.svg" alt="">
    </div>
  </div>
  <div class="bg-indigo-950 w-10 h-10 text-white p-2 pl-4 box-border">2</div>
  <div class="bg-blue-500 ml-1 w-10 h-10 text-white p-2 pl-4 box-border ">3</div>
  <div class="flex gap-3 bg-gray-100 min-w-60 py-2 pl-5 h-10 box-border items-center">УЛАН-УДЭ СИТИ
    <div class="overflow-hidden w-6 h-6 pt-0 bg-gray-100">
      <img class="w-6" src="../assets/vue.svg" alt="">
    </div>
  </div>
  <div class="bg-gray-100 w-60 py-2 pl-20 pr-px h-10 box-border">СУПЕРЛИГА</div>
</div>
<div class="w-4/5 flex ml-20 my-1 cardres ">
  <div class="bg-gray-100 w-60 py-3 pl-5  h-10 box-border ">24/02/2024</div>
  <div class="flex gap-3 bg-gray-100 w-60 py-2 pl-5 h-10 box-border items-center">36 Армия
    <div class="overflow-hidden w-6 h-6 pt-0 bg-gray-100">
      <img class="w-6" src="../assets/vue.svg" alt="">
    </div>
  </div>
  <div class="bg-indigo-950 w-10 h-10 text-white p-2 pl-4 box-border">2</div>
  <div class="bg-blue-500 ml-1 w-10 h-10 text-white p-2 pl-4 box-border ">3</div>
  <div class="flex gap-3 bg-gray-100 min-w-60 py-2 pl-5 h-10 box-border items-center">УЛАН-УДЭ СИТИ
    <div class="overflow-hidden w-6 h-6 pt-0 bg-gray-100">
      <img class="w-6" src="../assets/vue.svg" alt="">
    </div>
  </div>
  <div class="bg-gray-100 w-60 py-2 pl-20 pr-px h-10 box-border">СУПЕРЛИГА</div>
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
