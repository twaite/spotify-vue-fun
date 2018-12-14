<template>
  <div id="app">
    <s-row class="w-screen h-screen" xAlign="center">
      <s-col yAlign="center">
        <s-button class="w-48">Login</s-button>
      </s-col>
    </s-row>
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
