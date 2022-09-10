<template>
  <main id="recoverPassword">
    <div class="container">
        <div class="page-login">
            <h1 class="page-title signin-title border-bottom width-100 margin-bottom-30 padding-bottom-30">
بازیابی  رمز عبور     </h1>
            <div class="form-recoverpassword ">
                <form action="">
                    <input type="text" class="text " placeholder="ایمیل یا شماره">

                    <button class="btn btn-brand box-show-btn width-100 btn-account  ">بازیابی</button>
                    <div class="c-account-box__footer">
                        <span>در سایت عضوید؟</span>
                         <router-link  :to="{name:'Login' }" class="gotopage">صفحه ورود</router-link>

                    </div>
                </form>
            </div>

        </div>
    </div>
</main>
</template>

<script>
export default {
        name:"Resetpass"

}
</script>

<style>

</style>