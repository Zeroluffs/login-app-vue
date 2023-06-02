<template>
  <div class="flex justify-center items-center mt-32 xl:mt-0 xl:h-screen">
    <div class="bg-white p-8 text-neutral-800 rounded-2xl shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="mb-4">
          <label for="username" class="block mb-2">Username:</label>
          <Field
            name="username"
            type="text"
            id="username"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage name="username" class="text-red-500" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password:</label>
          <Field
            name="password"
            type="password"
            id="password"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage class="text-red-500" name="password" />
        </div>
        <div>
          <button
            :disabled="loading"
            class="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </Form>
      <div class="text-center mt-8 text-xl text-red-500">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import User from "../models/User";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
      loading: false,
      message: "",
      schema,
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
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          console.log(error.response.data.error, "error");
          this.message = error.response.data.error;
        }
      );
    },
  },
};
</script>
