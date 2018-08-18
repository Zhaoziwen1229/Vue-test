<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"hi",
    data (){
        return {
            msg:"Hi,I am hi 页面"
        }
    }
}
</script>
<style scoped>

</style>
