<script setup>
  useHead({
    title: 'Hirtshals Byg',
    meta: [
      { name: 'description', content: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  })

  useSeoMeta({
    title: 'Hirtshals Byg',
    ogTitle: 'Hirtshals Byg',
    description: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.',
    ogDescription: 'Hirtshals Byg, din partner når du står og skal bruge hjælp til dit næste projekt.'
  })

</script>

<template>
  <main class="page">
    <header class="page__hero hero">
      <h1 class="hero__heading white shadow">
        Hirtshals byg
      </h1>
      <h2 class="hero__subheader white shadow"> 
        Tlf: <a class="white" href="tel: +4528727599">28 72 75 99</a>
      </h2>
      <p class="hero__description white">
        Hirtshals byg står klar til at hjælpe dig med dit næste projekt.
      </p>
      <p class="hero__description white">
        Så tøv endelig ikke med at kontakte os hvis du står og skal have hjælp, vi er klar til at hjælpe med store som små opgaver!
      </p>
    </header>
  </main>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  .white {
    color: white !important;
  }

  .shadow {
    text-shadow: 2px 2px rgba(0,0,0,0.5);
  }

  .page {
    background-color: #333;
    width: 100%;
    height: 100vh;

    .hero {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &__heading {
        text-transform: uppercase;
        text-shadow: 2px 2px rgba(0,0,0,0.5);
        font-size: 2.3rem;
        
        @media (min-width: 600px) {
          font-size: 3rem;
        }
      }

      &__subheader {
        cursor: pointer;
        font-size: 1.6rem;

        @media (min-width: 600px) {
          font-size: 2rem;
        }

        a {
          text-decoration: none !important;
        }
      }

      &__description {
        width: 80%;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
</style>
