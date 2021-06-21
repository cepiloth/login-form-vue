<template>

  <ul class="list-group">
    <li v-for="story in store.stories" class="list-group-item">
      {{story.writer}} said "{{story.plot}}"
      Story upvotes {{ story.upvotes}}.
    </li>
  </ul>

</template>

<script>
import {store} from '../store.js'

export default {
  data() {
    return {
      //store.stories에 접근할 수 있습니다.
      store
    }
  },
  created () {
    console.log('stories')
  }
}
</script>

<style scoped>
  .input {
    style = border-style:dotted
  }
</style>
