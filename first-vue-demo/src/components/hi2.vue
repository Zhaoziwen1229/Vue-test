<template>
    <div>
        {{msg}}---{{$route.params.username}}---{{$route.params.id}} 
    </div>
</template>
<script>
export default {
    name:"hi2",
    data (){
        return {
            msg:"Hi,I am hi2 页面"
        }
    }
}
</script>
<style scoped>

</style>
