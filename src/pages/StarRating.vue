<template>
  <div class="star-rating">
    <span
      v-for="star in totalStars"
      :key="star"
      class="star"
      :class="{ 'filled': star <= rating, 'editable': editable }"
      @click="handleRatingClick(star)"
    >
      &#9733;
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
    totalStars: {
      type: Number,
      default: 5
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleRatingClick(star) {
      if (this.editable) {
        this.$emit('input', star)
      }
    }
  }
}
</script>

<style scoped>
.star-rating {
  display: inline-block;
  font-size: 1.5rem;
}

.star {
  cursor: pointer;
  color: gray;
}

.star.filled {
  color: gold;
}

.star.editable:hover {
  transform: scale(1.2);
}
</style>
