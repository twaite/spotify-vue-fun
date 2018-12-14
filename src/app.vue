<template>
  <div id="app">
    <h1 class="text-red">Hello World</h1>
    <router-view/>
  </div>
</template>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Muli', sans-serif;
}
</style>
