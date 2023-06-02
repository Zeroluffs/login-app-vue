<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded-2xl shadow-md w-[400px]">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful"></div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email:</label>
          <Field
            type="email"
            id="email"
            class="w-full p-2 border border-gray-300 rounded"
            name="email"
          />
          <ErrorMessage class="text-red-500 text-sm" name="email" />
        </div>
        <div class="mb-4">
          <label for="username" class="block mb-2">Username:</label>
          <Field
            name="username"
            type="text"
            id="username"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage class="text-red-500 text-sm" name="username" />
        </div>
        <div class="mb-4">
          <label for="password" class="block mb-2">Password:</label>
          <Field
            name="password"
            type="password"
            id="password"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <ErrorMessage class="text-red-500 text-sm" name="password" />
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 w-[100%] text-white font-bold py-2 px-4 rounded"
            :disabled="loading"
          >
            Sign Up
          </button>
        </div>
      </Form>
      <div
        class="text-center mt-8 text-xl"
        v-if="message"
        :class="successful ? `text-green-500` : 'text-red-500'"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      console.log("computed logged", this.$store.state.auth.status.loggedIn);
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
            console.log("data", data)
          this.message = "Successful registration!";
          this.successful = true;
          this.loading = false;
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        },
        (error) => {
            console.log("error",error)
          this.message = error.response.data;
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
