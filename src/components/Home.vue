<template>
    <Header />
    <h1>สวัสดี {{ fullname }} </h1>
    <h2>ยินดีต้อนรับเข้าสู่ระบบ</h2>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>ADDRESS</th>
            <th>ACTIONS</th>
        </tr>

        <tr v-for="fs in foodshops" :key="fs.id">
            <td>{{ fs.id }}</td>
            <td>{{ fs.sname }}</td>
            <td>{{ fs.contact }}</td>
            <td>{{ fs.address }}</td>
            <td>
                <router-link :to="'/update/'+fs.id">ปรับปรุงข้อมูล</router-link>
            </td>
        </tr>
    </table>

</template>

<script>
    import Header from './Header.vue'
    import axios from 'axios'

    export default{
        name: 'HomePage',
        data(){
            return{
                fullname: '',
                foodshops: [],
            }
        },

        components: {
            Header,

        },

        async mounted(){
            document.title = "IT01"
            let user = localStorage.getItem("user-data")
            this.fullname = JSON.parse(user).fullname 

            // let result = await axios.get("http://192.168.10.20:3000/foodshops");
            let result = await axios.get("http://localhost:3000/foodshops");
                // console.warn(result);
                this.foodshops = result.data

            if(!user){
                this.$router.push({
                    name: 'SignIn' //เปลี่ยนไปหน้าเข้าสู่ระบบ
                });
            }

            
            
        },                   
    }

</script>

<style>
table{
    margin: auto;
    width: 95%;
    border-collapse: collapse;
}
 .fs{
    margin: auto;
    display: block;

 }

th{
    background-color: rgb(10, 2, 252);
    border: 1px solid gray;
}
td{
    border: 1px solid rgb(21, 0, 255);
}

</style>