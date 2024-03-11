<template>
    <div class="menu">
        <router-link to="/">หน้าแรก</router-link>
        <router-link to="/add">เพิ่มข้อมูล</router-link>
        <!-- <router-link to="/update">ปรับปรุงข้อมูล</router-link> -->
        <a href="" @click="signout">ออกจากระะบบ</a>
    </div>
</template>

<script>
export default {
    name: 'HeaderMenu',
    methods: {
        signout() {
            console.log("ออกจากระะบบ");
            localStorage.clear();
            this.$router.push({ name: 'SignIn' });
        }
    }
}


</script>

<style>

</style>