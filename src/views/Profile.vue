<template>
  <div
    class="flex flex-col justify-center m-auto items-center w-[324px] xl:w-[800px]"
  >
    <div class="mt-24 whitespace-nowrap">
      <h1 class="text-center text-4xl font-semibold mb-8">
        Welcome to your profile
      </h1>
      <p class="text-2xl">
        Username: <span class="font-medium">{{ currentUser?.username }}</span>
      </p>

      <p class="text-2xl mt-4">
        Email:
        <span class="font-medium">{{ currentUser?.email }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    } else {
      this.$router.push("/profile");
    }
  },
};
</script>
