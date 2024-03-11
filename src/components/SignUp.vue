<template>
    <div class="container">
    <img class="logo" src="../assets/foodshop.png" alt="Food Shop Logo" >
    <div class="signup">
        <input type="text" placeholder="ชื่อ-สกุล" v-model="fullname">
        <input type="text" placeholder="อีเมล์" v-model="email">
        <input type="password" placeholder="รหัสผ่าน" v-model="password">

        <button v-on:click="signup">ลงทะเบียนใช้งาน</button>
        <p>
            <router-link class="rtx" to="/sign-in">เข้าสู่ระบบ</router-link>
        </p>
    </div>
</div>
</template>

<script>

    import axios from 'axios';

    export default{
        
        name: 'SignUp',
        data(){
            return {
                fullname:'',
                email:'',
                password:'',
            }
        },

        methods:{
            
            async signup(){

                if (!this.email || !this.password || !this.fullname) {
                alert('กรุณากรอกให้ครบ');
                return;
            }
                // console.warn(this.fullname,this.email, this.password) 
                // 192.168.10.20 ไอพีอาจารย์
                // let result = await axios.post("http://192.168.10.20:3000/users",{
                let result = await axios.post("http://localhost:3000/users",{
                    fullname: this.fullname,
                    email:this.email,
                    password:this.password
                });

                if(result.status == 201){
                    alert('ลงทะเบียนเรียบร้อย')
                    localStorage.setItem('user-data',JSON.stringify(result.data));
                    
                    //เมื่อลงทะเบียนเสร็จไปหน้าhome
                    this.$router.push({
                        name:'HomePage'
                    })

                }else{
                    alert('ไม่สามารถลงทะเบียนได้')
                }

            },

            mounted(){
            let user = localStorage.getItem("user-data")
            if(user){
                this.$router.push({
                    name:'HomePage'
                })
            }
        }
        }
    }


</script>

<style>

    .logo{
        width:  100px;
    }

    .signup input{
        font-size: 15px;
        padding: 5px;
        outline: none;
        border-radius: 10px;
        font-size: 18px;
        display: block;
        width: 300px;
        height: 30px;
        padding-left: 20px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        border: 3px solid rgb(8, 0, 255);
    }

    .signup button{
        font-size: 18px;
        background-color: rgb(8, 0, 255);
        color: rgb(0, 0, 0);
        width: 320px;
        height: 50px;
        cursor: pointer;
        border: 3px solid rgb(8, 0, 255);
        border-radius: 10px;
        color: white;
    }

    .signup button :hover{
        background-color: aquamarine;
    }

</style>
