<template>
    <div>
        <headerCustom2 />
        <router-view />
        <footerCustom2 />
    </div>
</template>

<script>
import headerCustom2 from '@/components/HeaderCustom2.vue'
import footerCustom2 from '@/components/FooterCustom2.vue'

export default {
    components: {
        headerCustom2,
        footerCustom2
    }
}


</script>