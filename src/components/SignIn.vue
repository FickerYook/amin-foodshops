<template>
    <div class="container">
        <img class="logo" src="../assets/foodshop.png" alt="Food Shop Logo">
        <div class="signin">
            <input type="text" placeholder="อีเมล์" v-model="email">
            <input type="password" placeholder="รหัสผ่าน" v-model="password">

            <button v-on:click="signin">เข้าสู่ระบบ</button>
            <p>
                <router-link class="rtx" to="/sign-up">ลงทะเบียน</router-link>
            </p>
        </div>
    </div>
</template>


<script>

import axios from 'axios';

export default {
    name: 'SignIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async signin() {
            if (!this.email || !this.password) {
                alert('กรุณากรอกทั้งอีเมล์และรหัสผ่าน');
                return;
            }
            // console.warn(this.email, this.password)
            // let result = await axios.get(`http://192.168.10.20:3000/users?email=${this.email}&password=${this.password}`)
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem('user-data', JSON.stringify(result.data));
                this.$router.push({
                    name: 'HomePage'
                })

            } else {
                alert('รหัสหรืออีเมล์ไม่ถูกต้อง')
                this.email = ''
                this.password = ''
            }
        },

        mounted() {
            let user = localStorage.getItem("user-data");
            if (user) {
                this.$router.push({
                    name: 'HomePage'
                })
            }
        }
    }

    //ถ้ามีการล็อกอินแล้ว ไม่ต้องล็อกอินใหม่

}
</script>










<style>
.logo {
    width: 100px;
}

.signin input {
    outline: none;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    display: block;
    width: 300px;
    height: 30px;
    padding-left: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border: 3px solid rgb(8, 0, 255);
}

.signin button {
    background-color: rgb(33, 58, 247);
    color: rgb(0, 0, 0);
    width: 320px;
    height: 50px;
    cursor: pointer;
    border: 3px solid rgba(37, 4, 138, 0.869);
    border-radius: 10px;
    color: white;

}
</style>
