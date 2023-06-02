<template>
  <div
    class="flex flex-col justify-center m-auto items-center w-[324px] xl:w-[800px]"
  >
    <div class="mt-24 whitespace-nowrap">
      <h1 class="text-center text-4xl font-semibold mb-8">
        Welcome {{ currentUser?.username }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
