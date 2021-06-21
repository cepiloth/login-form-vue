<template>
  <div id="register">
    <h2>Register Form</h2>
    <input placeholder="First Name" class="form-control"><br>
    <input placeholder="Last Name" class="form-control"><br>
    <input placeholder="Email address" class="form-control"><br>
    <input placeholder="Pick a password" class="form-control"><br>
    <input placeholder="Confirm password" class="form-control"><br>
    <button class="btn">Sign up</button>
    <famous :stories="stories"></famous>
  </div>
</template>

<script>
import Famous from './Famous.vue'

export default {
  components: {
    Famous
  },
  props: ['stories'],
  created () {
    console.log('register')
  }
}
</script>

<style>
</style>
