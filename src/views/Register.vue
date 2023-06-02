<template>
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white p-8 rounded-2xl shadow-md w-[400px]">
        <h2 class="text-2xl font-bold mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block mb-2">Username:</label>
            <input
              type="string"
              id="username"
              v-model="username"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block mb-2">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script>
import User from "../models/User";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", ""),
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      if (this.user.username && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(() => {
          this.$router.push("/profile");
        });
      }
    },
  },
};
</script>