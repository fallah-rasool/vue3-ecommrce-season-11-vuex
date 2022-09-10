<template>
  <main id="register">
    <div class="container">
        <div class="page-login">
            <h1 class="page-title signin-title border-bottom width-100 margin-bottom-30 padding-bottom-30">
                ثبت نام در وب سایت
            </h1>
            <div class="form-register ">
                <form action="">
                    <input type="text" class="text " placeholder="نام  و نام خانوادگی">
                    <input type="text" class="text text-left" placeholder="شماره موبایل">
                    <input type="text" class="text text-left" placeholder="ایمیل">
                    <input type="text" class="text text-left" placeholder="رمز عبور">
                    <input type="text" class="text text-left" placeholder="تکرار رمز عبور">

                    <select name="">
                        <option value="">انتخاب استان</option>
                        <option value="">تهران</option>
                        <option value="">خراسان رضوی</option>
                        <option value="">فارس</option>
                    </select><div class="dropdown-select wide " tabindex="0"><span class="current">انتخاب استان</span><div class="list"><div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div><ul><li class="option selected" data-value="" data-display-text="">انتخاب استان</li><li class="option " data-value="" data-display-text="">تهران</li><li class="option " data-value="" data-display-text="">خراسان رضوی</li><li class="option " data-value="" data-display-text="">فارس</li></ul></div></div>
                    <select name="">
                        <option value="">انتخاب شهر</option>
                        <option value="">سعادت آباد</option>
                        <option value="">ستارخان</option>
                        <option value="">مشهد</option>
                    </select><div class="dropdown-select wide " tabindex="0"><span class="current">انتخاب شهر</span><div class="list"><div class="dd-search"><input id="txtSearchValue" autocomplete="off" onkeyup="filter()" class="dd-searchbox" type="text"></div><ul><li class="option selected" data-value="" data-display-text="">انتخاب شهر</li><li class="option " data-value="" data-display-text="">سعادت آباد</li><li class="option " data-value="" data-display-text="">ستارخان</li><li class="option " data-value="" data-display-text="">مشهد</li></ul></div></div>
                    <button class="btn btn-brand box-show-btn width-100 btn-account mb-10 ">ثبت نام در وب سایت</button>
                    <button class="btn btn-cancel  width-100 btn-account ">انصراف</button>
                    <div class="c-account-box__footer">
                        <span>در سایت عضوید؟</span>
                        <router-link  :to="{name:'Login' }" class="gotopage">صفحه ورود</router-link >

                    </div>
                </form>
            </div>

        </div>
    </div>
</main>
</template>

<script>
export default {
        name:"Register"

}
</script>

<style>

</style>