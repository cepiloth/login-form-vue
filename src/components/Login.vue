<template>
  <div id="login">
    <h2>Sign in</h2>
    <input type="email" placeholder="Email address"><br>
    <input type="password" placeholder="Password"><br>
    <v-btn color="success" id="btnSignIn" class="button" >Sign up</v-btn>
  </div>
</template>

<script>
export default {
  created () {
    console.log('login')
  }
}
</script>

<style>
</style>
