<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  const App = {};

  export default App;
</script>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Muli', sans-serif;
}

#app {
  @apply bg-black text-white;
}
</style>
