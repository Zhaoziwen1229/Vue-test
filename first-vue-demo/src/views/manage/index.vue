<template>
    <div class="manage tc">
        <button @click="add">新增</button>
        <div class="input-area" v-show="showAdd">
            <input type="text" name="" id="" placeholder="请输入人员姓名" v-model="nameValue">
            <button @click="addName">确定</button>
        </div>
        <table>
            <tr>
                <th>姓名</th>
                <th>操作</th>  
            </tr>
            <tr v-for="(item,index) in peoples" :key="index">
                <td>{{item.name}}</td>
                <td :id="index"><span @click="edit($event)">编辑</span>&nbsp;<span @click="del($event)">删除</span></td>
            </tr>
        </table>
        <div class="wrap"  v-show="showEdit">
            <div class="content">
                <input type="text" name="" id="" placeholder="请输入新姓名" v-model="newName">
                <button @click="cancel">取消</button>
                <button @click="editName">确定</button>
            </div>
        </div>
        <footer-nav :class="{'isManage':isNowPage}"></footer-nav>
    </div>
</template>
<script>
import FooterNav from '../../components/footer.vue'
export default {
    components:{
        FooterNav
    },
    data (){
        return {
            isNowPage:true,
            peoples:[{'name':'jack'},{'name':'joe'}],
            showAdd:false,
            nameValue:"",
            showEdit:false,
            newName:"",
            editId:0
        }
    },
    methods:{
        add:function(){
            this.showAdd=true
        },
        addName:function(){
            let v=this.nameValue
            if(v.trim()==""){
                alert("请输入人员姓名")
            }else{
                let data={}
                data.name=v
                this.peoples.push(data)
                this.nameValue=""
            }
        },
        del:function(e){
            let index=Number(e.target.offsetParent.id)
            this.peoples.splice(index,1)
        },
        edit:function(e){
            let id = e.target.offsetParent.id
            this.showEdit=true
            this.editId=Number(id)
            this.newName=this.peoples[id].name
        },
        cancel:function(){
            this.showEdit=false;
        },
        editName:function(){
            let v = this.newName
            if( v.trim()===""){
                alert("请输入新的姓名")
            }else{
                this.peoples[this.editId].name=this.newName
                this.showEdit=false;
            }
        }
        
    }
}
</script>
<style scoped>
    .manage>button{width: 160px;height: 40px;background-color: #41b883;outline:none;color:#fff;font-size: 18px;cursor: pointer;}
    .input-area{margin-top: 20px;}
    .input-area input{width: 200px;height: 30px;;}
    .input-area button{width: 80px;height: 34px;;}
    table{width: 200px;margin:  0 auto;font-family :"Microsoft YaHei";}
    table tr{height: 38px;}
    .wrap{position: absolute;width: 100%;height: 100%;background-color: rgba(0,0,0,0.5);z-index: 1;top:0;left:0;}
    .wrap .content{width: 260px;height: 120px;position: absolute;left: 0;top:0;bottom:0;right: 0;margin: auto;}
    .wrap .content input{display: block;width: 100%;height: 40px;;}
    .wrap .content button{width: 100px;height: 30px;margin: 5px;}
</style>
