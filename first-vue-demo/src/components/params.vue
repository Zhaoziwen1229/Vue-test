<template>
    <div>
        {{msg}}
        <p>{{$route.params.newsId}}</p>
        <p>{{$route.params.newsTitle}}</p>
    </div>
</template>
<script>
export default {
    data (){
        return {
            msg:"params页面"
        }
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入路由");
        console.log(from);
        next(true);
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log("准备离开路由模板");
        console.log(from);
        next(true);
    }
}
</script>
<style scoped>

</style>
