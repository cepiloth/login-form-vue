<template>

  <ul class="list-group">
    <h2>Stroies</h2>
    <li v-for="story in stories" class="list-group-item">
      {{story.writer}} said "{{story.plot}}"
      Story upvotes {{ story.upvotes}}.
    </li>
  </ul>
  
</template>

<script>
export default {
  data () {
    return {
      stories: [
        {
          plot: 'My horse is amazing.',
          writer: 'Mr. Weebl',
          upvotes: 28,
          votes: false
        },
        {
          plot: 'Narwhals invted Shish Kebab.',
          writer: 'Mr. Weebl',
          upvotes: 8,
          votes: false
        },
        {
          plot: 'The dark side of the Force is stronger.',
          writer: 'Darth Vader',
          upvotes: 52,
          votes: false
        },
        {
          plot: 'One does not simply walk into Morder',
          writer: 'Boromir',
          upvotes: 74,
          votes: false
        }
      ]
    }
  }
}
</script>

<style scoped>
  .input {
    style = border-style:dotted
  }
</style>
