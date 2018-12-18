<template>
  <div class="w-screen h-screen bg-grey">
    <s-header/>
    <s-row wrap xAlign="around" yAlign="around" class="card-row">
      <h3 class="m-3 w-full text-purple-darkest">Categories</h3>
      <div
        class="card"
        v-for="category in categories"
        :key="category.id">
        <img :src="category.icons[0].url">
        <h3 class="card-title">{{category.name}}</h3>
      </div>
    </s-row>
  </div>
</template>

<script>
import { getCategories } from '@/services/categories';

const HomePage = {
  name: 'HomePage',
  data() {
    return {
      categories: [],
    };
  },
  created() {
    getCategories().then(res => {
      this.categories = res.data.categories.items;
    });
  }
}

export default HomePage;
</script>

<style lang="postcss">
.card-row {
  @apply pb-5 overflow-scroll max-h-app;
}

.card {
  height: 275px;
  @apply my-5 shadow-md relative cursor-pointer;
}

.card-title {
  @apply w-full absolute pin-b mb-3 text-center;
}
</style>

