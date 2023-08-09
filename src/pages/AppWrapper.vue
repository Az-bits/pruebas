<template>
    <div>
        <headerCustom />
        <router-view />
        <footerCustom    /> 
    </div>
</template>

<script>
import headerCustom from '@/components/HeaderCustom.vue'
import footerCustom from '@/components/FooterCustom.vue'

export default {
    components:{
        headerCustom,
        footerCustom
    }
}


</script>