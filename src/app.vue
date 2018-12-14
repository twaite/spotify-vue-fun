<template>
  <div id="app">
    <s-col yAlign="center" class="w-screen h-screen">
      <s-button>Login</s-button>
    </s-col>
  </div>
</template>

<script>
  const App = {
    methods: {
      log() {
        console.log('clicked');
      }
    }
  };

  export default App;
</script>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Muli', sans-serif;
}
</style>
