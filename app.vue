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
    <section class="hero__gallery gallery">
      <header class="gallery__teaser">
        <img src="./assets/images/terrasse_2/img_1.JPG" alt="">
      </header>
    </section>
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
    width: 100%;
    height: 100vh;

    .hero {
      width: 100%;
      background-color: #333;
      height: 90vh;
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

    .gallery {
      width: 100%;
      min-height: 90vh;
      position: relative;

      @media (min-width: 600px) {
        min-height: fit-content;
      }

      &__teaser {
        position: relative;
        width: 80%;
        height: 50vh;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        
        @media (min-width: 600px) {
          width: 500px;
          transform: unset;
          left: 50px;
          padding: 10px
        }

        img {
          height: 100%;
        }
      }
    }
  }
</style>
