<template>
    <div>
        {{msg}}-{{ $route.params.username }}-{{ $route.params.id }}
    </div>
</template>
<script>
export default {
    name:"hi1",
    data (){
        return {
            msg:"Hi,I am hi1 页面"
        }
    }
}
</script>
<style scoped>

</style>
