<template>
  <div id="register">
    <h2>Register Form</h2>
    <input placeholder="First Name" class="form-control" v-model="color"><br>
    <input placeholder="Last Name" class="form-control"><br>
    <input placeholder="Email address" class="form-control"><br>
    <input placeholder="Pick a password" class="form-control"><br>
    <input placeholder="Confirm password" class="form-control"><br>
    <v-btn color="success" id="btnSave" class="button" @click="upload">Sign up</v-btn>
  </div>
</template>

<script>
export default {
  created () {
    console.log('register')
  }
}
</script>

<style scoped>
  .input {
    style = border-style:dotted
  }
</style>
