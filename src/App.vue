<template>
  <div id="app">
    <nav
      class="flex xl:flex-row flex-col xl:px-24 justify-center items-center xl:justify-between mt-16 max-w-7xl text-neutral-800 text-4xl font-semibold mx-auto"
    >
      <div class="flex flex-row gap-9 mb-4 xl:mb-0">
        <router-link active-class="text-blue-500" to="/profile"
          >Profile</router-link
        >
      </div>
      <div>
        <div
          class="flex items-center xl:items-start gap-4 flex-col xl:flex-row xl:gap-9"
          v-if="!currentUser"
        >
          <router-link active-class="text-blue-500" to="/login"
            >Login</router-link
          >
          <router-link active-class="text-blue-500" to="/register"
            >Register</router-link
          >
        </div>
        <div v-if="currentUser">
          <!-- <span class="text-neutral-800 font-semibold">{{
            currentUser.username
          }}</span> -->
          <button
            @click="logout"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped></style>
