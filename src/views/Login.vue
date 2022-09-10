<template>
  <div class="page-login">
            <h1 class="page-title signin-title border-bottom width-100 margin-bottom-30 padding-bottom-30">
                ورود به وب&zwnj;سایت
            </h1>
            <div class="form-login ">
                <form action="">
                    <input type="text" class="text text-left" placeholder="شماره یا ایمیل">
                    <input type="pass" class="text text-left" placeholder="رمز عبور">
                    <label class="lblcheckbox text-right">
                        <input type="checkbox" class="checkboxFilter">
                        <span class="checkmark position-relative"></span>
                        مرا بخاطر بسپار
                        
                    </label>
                     <router-link  :to="{name:'Resetpass' }"  class="recoverpassword" href="recoverpassword.html">بازیابی رمز عبور</router-link>
                    <button class="btn btn-brand box-show-btn width-100 btn-account ">ورود به سایت</button>
                    <div class="c-account-box__footer">
                        <span>کاربر جدید هستید؟</span>
                         <router-link  :to="{name:'Register' }"  class="gotopage">صفحه ثبت نام</router-link>

                    </div>
                </form>
            </div>

        </div>
</template>

<script>
export default {
        name:"Login"

}
</script>

<style>

</style>