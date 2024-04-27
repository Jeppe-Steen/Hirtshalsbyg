<script setup>
  const handleCall = () => {
    window.open("tel:+4528727599");
    return;
  }

  useHead({
    title: 'Hirtshals Byg',
    meta: [
      { name: 'description', content: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.' }
    ],
  })

  useSeoMeta({
    title: 'Hirtshals Byg',
    ogTitle: 'Hirtshals Byg',
    description: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.',
    ogDescription: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.'
  })

</script>
<template>
  <div class="page-wrapper">
    <section class="page-hero hero">
      <header class="hero__header">
        <h1 class="hero__heading uppercase">Hirtshals byg</h1>
        <p class="hero__subheading" @click="handleCall()">Tlf: 28 72 75 99</p>
        <p class="hero__text">Hirtshals byg står klar til at hjælpe dig med dit næste projekt. <br> Så tøv endelig ikke med at kontakte os hvis du står og skal have hjælp, vi er klar til at hjælpe med store som små opgaver!</p>
        <button class="btn btn--outlined white hide" type="button">
          Se billeder her
        </button>

        <Arrow/>
      </header>
    </section>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.uppercase {
  text-transform: uppercase;
}

.page-wrapper{
  height: 100vh;
  width: 100%;
  background-color: #333;

  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__header {
      width: 50%;
      text-align: center;
      color: white;
    }

    &__heading {
      font-size: 50px;
      text-shadow: 3px 3px 5px #00000050;
    }
    &__subheading {
      font-size: 30px;
      cursor: pointer;
    }

    &__text {
      margin-top: 20px;
    }
  }
}

.btn {
  padding: 10px 20px;
  margin: 20px;
  font-size: 18px;
  border-radius: 6px;

  &--outlined {
    background: none;
    border: 1px solid #fff;
  }

 &:hover {
  cursor: pointer;
  box-shadow: 0px 4px 8px #00000050;
 }
}

.white {
  color: white;
}

.hide {
  display: none !important;
}
</style>
