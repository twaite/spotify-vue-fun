<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  function getHashParams() {

    var hashParams = {};
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&;=]+)=?([^&;]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.hash.substring(1);

    while (e = r.exec(q))
      hashParams[d(e[1])] = d(e[2]);

    return hashParams;
  }

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
