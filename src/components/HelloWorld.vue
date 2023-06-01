<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

</script>

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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Perform login logic here, e.g. send the login request to the server
      // and handle the response accordingly
      console.log("Logging in...");
      console.log("Email:", this.username);
      console.log("Password:", this.password);
    },
  },
};
</script>


