<template>
    <Header />
    <h1>สวัสดี {{ fullname }} </h1>
    <h2>คุณอยู่ในหน้าเพิ่มข้อมูล</h2>

    <div class="signup">
        <input type="text" placeholder="ชื่อร้าน" v-model="foodshops.sname">
        <input type="text" placeholder="เบอร์ติดต่อ" v-model="foodshops.contact">
        <input type="text" placeholder="ที่อยู่" v-model="foodshops.address">

        <button v-on:click="addFoodShop">เพิมข้อมูล</button>
    </div>

</template>

<script>
    import axios from 'axios';
    import Header from './Header.vue'

    export default{
        
        name: 'AddPage',
        data(){
            return{
                fullname: '',
                foodshops: {
                    sname: '',
                    contact: '',
                    address: ''
                }
            }
        },

        methods: {
            async addFoodShop(){
                console.log(this.foodshops)

                // let result = await axios.post("http://192.168.10.20:3000/foodshops",{
                let result = await axios.post("http://localhost:3000/foodshops",{
                    sname: this.foodshops.sname,
                    contact:this.foodshops.contact,
                    address:this.foodshops.address,
                    // fullname: this.fullname,
                    // email:this.email,
                    // password:this.password
                });

                if(result.status == 201){
                    alert('เพิ่มข้อมูลเรียบร้อยแล้ว')
                    localStorage.setItem('user-data',JSON.stringify(result.data));
                    
                    //เมื่อลงทะเบียนเสร็จไปหน้าhome
                    this.$router.push({
                        name:'HomePage'
                    })

                }else{
                    alert('ไม่สามารถเพิ่มข้อมูลได้')
                }
            }
        },
        
        components: {
            Header,
        },

        mounted(){
            let user = localStorage.getItem("user-data")
            this.fullname = JSON.parse(user).fullname
            if(!user){
                this.$router.push({
                    name: 'SignIn' //เปลี่ยนไปหน้าเข้าสู่ระบบ
                })
            }
        }
        
    }

</script>

<style>


</style>