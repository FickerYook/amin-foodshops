<template>
    <Header />
    <h1>สวัสดี {{ fullname }} </h1>
    <h2>คุณอยู่ในหน้าแก้ไขข้อมูลในระบบ</h2>

    <div class="signup">
        <input type="text" placeholder="ชื่อร้าน" v-model="foodshops.sname">
        <input type="text" placeholder="เบอร์ติดต่อ" v-model="foodshops.contact">
        <input type="text" placeholder="ที่อยู่" v-model="foodshops.address">

        <button @click="updateFoodShop">ปรับปรุงข้อมูล</button>
    </div>
    
</template>

<script>

    import Header from './Header.vue'
    import axios from 'axios'

    export default{
        name: 'UpdatePage',

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

        components: {
            Header,
        },

        methods: {
            async updateFoodShop(){
                

                // let result = await axios.put("http://192.168.10.20:3000/foodshops/"+this.$route.params.id,{
                let result = await axios.put("http://localhost:3000/foodshops/"+this.$route.params.id,{
                // let result = await axios.post("http://localhost:3000/users",{
                    sname: this.foodshops.sname,
                    contact:this.foodshops.contact,
                    address:this.foodshops.address,
  
                });

                if(result.status == 200){
                    alert('เพิ่มข้อมูลเรียบร้อยแล้ว')
                    localStorage.setItem('user-data',JSON.stringify(result.data));
                    
                    this.$router.push({
                        name:'HomePage'
                    })

                }else{
                    alert('ไม่สามารถเพิ่มข้อมูลได้')
                }
            }
        },

        async mounted(){
            let user = localStorage.getItem("user-data")
            this.fullname = JSON.parse(user).fullname
            if(!user){
                this.$router.push({
                    name: 'SignIn' //เปลี่ยนไปหน้าเข้าสู่ระบบ
                })
            }

            const result = await axios.get("http://192.168.10.20:3000/foodshops/"+this.$route.params.id);
            this.foodshops = result.data;
        }
        
    }

</script>

<style>
</style>