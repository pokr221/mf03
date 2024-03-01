<script setup>
import MainResultCard from './components/MainResultCard.vue'
import TableCard from './components/TableCard.vue';
import { ref } from 'vue'


const Super = ref(false)
const Veterans = ref(false)
const Silver = ref(false)
const Gold = ref(false)
const Bronze = ref(false)

const SuperToTrue = () => {
  Super.value = true
  Veterans.value = false
  Gold.value = false
  Silver.value = false
  Bronze.value = false
  console.log('работает');
}
const VeteransToTrue = () => {
  Super.value = false
  Veterans.value = true
  Gold.value = false
  Silver.value = false
  Bronze.value = false
}
const GoldToTrue = () => {
  Super.value = false
  Veterans.value = false
  Gold.value = true
  Silver.value = false
  Bronze.value = false
}
const SilverToTrue = () => {
  Super.value = false
  Veterans.value = false
  Gold.value = false
  Silver.value = true
  Bronze.value = false
}
const BronzeTotrue = () => {
  Super.value = false
  Veterans.value = false
  Gold.value = false
  Silver.value = false
  Bronze.value = true
}


</script>

<template>
  
  <div class="flex gap-2 mt-2 bg-gray-200">

    <!-- левый блок -->
    <div class="absolut w-[250px] border bg-white">
      <div class="text-center pt-5 h-screen">
        <div class="cardres m-2">
          <button  class="btnNavigate mt-40">Главная</button>
          <button @click="SuperToTrue()" class="btnNavigate mt-2">Суперлига</button>
          <button @click="VeteransToTrue()" class="btnNavigate mt-2">Ветераны</button>
          <button @click="GoldToTrue()" class="btnNavigate mt-2">Золотая</button>
          <button @click="SilverToTrue()" class="btnNavigate mt-2">Серебрянная</button>
          <button @click="BronzeTotrue()" class="btnNavigate mt-2">Бронзовая</button>
          <button @click="BronzeTotrue()" class="btnNavigate mt-2">Дети</button>
        </div>
      </div>
    </div>
  
    <div class="relative flex flex-col gap-2 mr-2 w-full">
      <!-- шапка -->
      
      <div class="relative bg-gray-100 h-[150px]  overflow-hidden box-content">
          <img class="absolute" src="./assets/header.jpg" alt="">
          <div class="absolute bg-gray-500 w-full h-[150px] opacity-80"></div>
          <div class="mt-20 pr-20 absolute text-3xl text-white mr-0 ml-auto text-right w-full">
            МИНИ-ФУТБОЛ БУРЯТИИ
          </div>
          
          
          
      </div>
      
      
      
      <!-- основной -->
      <div class="flex gap-2 w-full bg-white">
        
        <div  class="h-screen px-5 border box-content w-full">
            
            <div class="flex mt-2">
              <div>
                <MainResultCard v-if="Super" 
                home="БайкалАвтоТрак" :home-score="10"  date="24/02/2024" 
                visit="Тивиком" :visit-score="3"  leauge="Суперлига" LeagueLogo="src/assets/goldcup.png"/>
                <MainResultCard v-if="Super" 
                home="ВСГУТУ" :home-score="0"  date="01/02/2024" 
                visit="36-АРМИЯ" :visit-score="0" leauge="Суперлига" LeagueLogo="src/assets/goldcup.png"/>
                <MainResultCard v-if="Gold" 
                home="Загустай-Сити" :home-score="3" date="01/02/2024" 
                visit="Спарта-2" :visit-score="2" leauge="Золотая" LeagueLogo="src/assets/goldcup-1.png"/>
                <MainResultCard v-if="Silver" 
                home="Банкир" :home-score="1" date="01/02/2024" 
                visit="Локомотив-ТЧЭ-7" :visit-score="5" leauge="Серебрянная" LeagueLogo="src/assets/silver.png"/>
                <MainResultCard v-if="Veterans" 
                home="Дорожник" :home-score="10" date="01/03/2024" 
                visit="Согласие" :visit-score="2" leauge="Ветеранская" LeagueLogo="src/assets/vetcup.png"/>
                <MainResultCard v-if="Bronze" 
                home="СФР" :home-score="3" date="01/03/2024" 
                visit="Постер" :visit-score="6" leauge="Ветеранская" LeagueLogo="src/assets/vetcup.png"/>
            </div>
            <div class="ml-10 h-screen border-l-4 p-6 ">
              <table class="table-fixed mt-2 w-full">
                <thead>
                  <tr>
                      <th width="70%" class="border-b ">Команда</th>
                      <th class="border-b  ">Игры</th>
                      <th class="border-b ">Очки</th>
                    </tr>
                </thead>
              </table>
              <TableCard title="БайкалАвтоТрак" :game-count="10" :pts-count="30"/>
              <TableCard title="УУ Сити" :game-count="10" :pts-count="21"/>
              <TableCard title="Всгуту" :game-count="10" :pts-count="20"/>
              <TableCard title="36 Армия" :game-count="10" :pts-count="19"/>
            </div>
          </div>

            
        </div>

        <!-- правый блок -->
        <!-- <div class="w-full h-screen w-full pl-5 pt-0 rounded-xl border">
          Предстоящие матчи
        </div> -->
      
   </div>
    

  
  </div> 
</div>
  
  

  <!-- <div class="m-20 w-3/5">
    
  </div> -->
  
</template>

<style scoped>
.top {
    
    font-family: 'Roboto'; 
}
.left {
  /* абсолютное позиционирование относительно всей страницы */
    position:absolute;
    left:0px; 
    top: 0px; 
    bottom: 0;
    width: 250px;
    border-right: 2px solid;
    border-color: black;
    right: auto; 
    background-color: aqua;
    /* скрыватие контенета если он больше контейнера слова */
    overflow: auto;
    /* перенос слова */
    word-break: break-all;
    font-family: 'Trebuchet MS', sans-serif;  
}
.main {
    position: absolute;
    left: 250px; 
    top: 92px; 
    right: 0; 
    bottom:0;
    padding-left: 50px;
    border: 2px solid;
    border-color: red;
   
}
.btnNavigate {
  background-color: #353f49;
  width: 9rem;
  height: 2rem;
  border-radius: 6px;
  color: aliceblue;
}
.btnNavigate:hover{
  /* background-color: #909eac; */
  transition: 0.3s;
  border: 1px solid;
  border-color: rgb(98, 182, 255);
  box-shadow: -8px 10px 10px 2px rgba(135, 130, 130, 0.2);

}
.btnNavigate:focus{
  background-color: #909eac;
  transition: 0.3s;
  
  border: 1px solid;
  border-color: rgb(98, 182, 255);
  

}

  
</style>
