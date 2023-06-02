<template>
    <div>
        <h1>Profile</h1>
        <p>Username: {{ currentUser?.username }}</p>
        <p>Email: {{ currentUser?.email }}</p>
        <p>Token: {{ currentUser?.token }}</p>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    },
}
</script>