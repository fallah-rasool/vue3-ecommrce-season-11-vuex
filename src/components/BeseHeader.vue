<template>
<!-- start header -->

  <header class="header">
    <div class="header__shape">
        <div class="header__shape-inner"></div>
    </div>
<div class="navbar-holder">
    <!-- start container -->
    <div class="container">
        <!-- start navbar -->
        <div class="navbar">
            <div class="navbar__row">

                <!-- start header__logo -->          
                <div class="header__logo">

                        <router-link :to="{name:'home'}" 
                        class="header__logo-img"> 
                        </router-link>
                
                </div>
                <!-- end header__logo -->

                <!-- start  navbar__items -->
                <div class="navbar__items"  

                :class="{ 'navbar__items--is-active':showsideBar}" >

                    <ul class="navbar__ul">
                        <li class="navbar__item">

                         <router-link :to="{name:'home'}" 
                        class="navbar__link navbar__link--is-active">صفحه اصلی
                        </router-link>
                        
                        </li>
                        <li class="navbar__item navbar__item--has-sub">

                        <router-link :to="{ name:'category' }"  
                        class="navbar__link"
                        >فروشگاه</router-link>

                            <ul class="navbar__subset">
                                <li class="navbar__item">  
                                <router-link :to="{ name:'category' }"  
                        class="navbar__link" >زیر منو 1</router-link>
                                </li>
                                <li class="navbar__item">  
                                <router-link :to="{ name:'category' }"  
                        class="navbar__link" >زیر منو 2</router-link>
                                </li>
                                <li class="navbar__item navbar__item--has-sub">
                                <router-link :to="{ name:'category' }" class="navbar__link">زیر منو 3</router-link>

                                    <ul class="navbar__subset">
                                        <li class="navbar__item">  
                                            <router-link :to="{ name:'category' }"  
                            class="navbar__link" >زیر منو 1</router-link>
                                        </li>
                                        <li class="navbar__item">  
                                            <router-link :to="{ name:'category' }"  
                            class="navbar__link" >زیر منو 2</router-link>
                                        </li>
                                        <li class="navbar__item navbar__item--has-sub">  
                                            <router-link :to="{ name:'category' }"  
                            class="navbar__link" >زیر منو 3</router-link>
                                            <ul class="navbar__subset">
                                                <li class="navbar__item">  
                                                <router-link :to="{ name:'category' }"  
                        class="navbar__link" >زیر منو 1</router-link>
                                        </li>
                                                <li class="navbar__item">  
                                                <router-link :to="{ name:'category' }"  
                        class="navbar__link" >زیر منو 2</router-link>
                                        </li>
                                                <li class="navbar__item">  
                                                <router-link :to="{ name:'category' }"  
                        class="navbar__link" >زیر منو 3</router-link>
                                        </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                      


                        <li class="navbar__item">
                       <router-link :to="{ name:'about' }"

                        class="navbar__link">درباره ما</router-link>
                        </li>
                       
                    </ul>
                </div>
                <!-- end  navbar__items -->


            <!-- start  navbar__action -->
            <div class="navbar__action">

                <!-- start  header__basket -->
                    <div class="header__basket">
                        <span class="header__basket-icon"
                        @click="ShowBasketDropdown"
                        ></span>
                        <span class="header__basket-count">0</span>
<div class="header__dropdown" 
:class="{'header__dropdown--is-active' :isBasketDropdown}"
                        >
                           
     <div class="header__dropdown-content header__dropdown-content--overflow">
                              
                                <div class="header__basket-item"
                                v-for="item  in 3 " :key="item"
                                >
                                   
                                    <a href="" class="header__basket-link">
                                        <img :src="require('../assets/img/big-pic.jpg')" class="header__basket-img">
                                    </a>

                                    <div class="header__basket-details">
                                        <h5><a class="header__basket-title" href="">محصول شماره 1</a></h5>
                                        <div class="header__basket-price">120000 تومان</div>
                                        <a href="" class="header__basket-remove">حذف</a>
                                    </div>
                                </div>

                              

                               




                                <div class="header__basket-btn">
                                      <router-link  :to="{name:'Cart' }" class="btn btn--boxshadow btn--brand w--100">ثبت و نهایی کردن
                                        سفارش</router-link>
                                </div>
                            </div>


                        </div>
                    </div>
                <!-- end  header__basket -->

                <!-- start  header__account -->
                    <div class="header__account">

                        <!-- start  header__account-icon -->
                        <span class="header__account-icon"
                        @click="ShowAccountDropdown"
                        ></span>
                        <!-- end  header__account-icon -->

                        <!-- start  header__dropdown -->
                        <div class="header__dropdown header__dropdown--w200"
                        :class="{'header__dropdown--is-active' :isAccountDropdown}"
                        >
                           <!-- start header__dropdown-content -->
                           <div class="header__dropdown-content">
                                <router-link  :to="{name:'Login' }" class="header__account-link">ورود</router-link>
                                <router-link  :to="{name:'Register' }" class="header__account-link">ثبت نام</router-link>
                            </div>
                            <!-- end header__dropdown-content -->
                        </div>
                        <!-- end  header__dropdown -->

                    </div>
                <!-- end  header__account --> 


                <!-- start  header__menu -->
                  <div class="header__menu" 
                   :class="{'header__menu--is-active':showsideBar}"
                  @click="toggleSidbar"></div>
                <!-- end  header__menu -->

            </div>
            <!-- end  navbar__action -->

            </div>
        </div>
        <!-- end navbar -->



    </div>
     <!-- ens container -->
</div>
</header>
<!-- end header -->

</template>

<script>
export default {
    name :"BeseHeader",
    data:()=>({
            isBasketDropdown:false,
            isAccountDropdown:false,
            showsideBar:false
    }),
    methods:{
             ShowBasketDropdown(){
                  this.isAccountDropdown = false
                  this.isBasketDropdown = !this.isBasketDropdown
             },
             ShowAccountDropdown(){
                  this.isBasketDropdown = false  
                  this.isAccountDropdown = !this.isAccountDropdown
             },
             EventListener(event){
                if(!event.target.closest('.header__basket')){
                     this.isBasketDropdown = false 
                }
                if(!event.target.closest('.header__account')){
                     this.isAccountDropdown = false 
                }

                if(!event.target.closest('.navbar')){
                     this.showsideBar=false

                     this.$emit('show-sidBar',this.showsideBar)
                }


             },
             toggleSidbar(){
                 this.showsideBar = !this.showsideBar;

                 this.$emit('show-sidBar',this.showsideBar)
             },
    },
    mounted(){
            document.addEventListener('click',this.EventListener);
    },
    destroyed() {
            document.removeEventListener('click',this.EventListener);
    },
}

</script>

<style>

</style>