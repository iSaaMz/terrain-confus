<script setup>
const articles = [
  {
    title: "Explorer le Terrain Confus : Guide pour Débutants",
    snippet: "Plongez dans le monde mystérieux du terrain confus avec ce guide complet pour débutants...",
    link: "/articles/guide-debutants-terrain-confus",
  },
  {
    title: "Les Dangers Cachés du Terrain Confus",
    snippet: "Découvrez les pièges et les dangers que cache le terrain confus et comment les éviter...",
    link: "/articles/dangers-terrain-confus",
  },
  {
    title: "Équipements Essentiels pour l'Exploration",
    snippet: "Préparez-vous correctement pour vos aventures en terrain confus avec cette liste d'équipements indispensables...",
    link: "/articles/equipements-exploration-terrain-confus",
  },
  {
    title: "Histoires et Légendes du Terrain Confus",
    snippet: "Plongez dans les récits fascinants et les légendes entourant le mystérieux terrain confus...",
    link: "/articles/histoires-legendes-terrain-confus",
  },
];
</script>

<template>
  <div class="blog-section bg-light" id="blog-section">
    <div class="container">
      <div class="row blog-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h1 class="heading">Plus sur notre Blog</h1>
          <p>Découvrez nos articles sur les aventures en terrain confus.</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-6 mb-4" v-for="(article, index) in articles" :key="index" data-aos="fade-up" :data-aos-delay="(index + 1) * 100">
              <div class="article-card">
                <h2 class="article-title">{{ article.title }}</h2>
                <p class="article-snippet">{{ article.snippet }}</p>
                <p class="text-center mb-0">
                  <a :href="article.link" class="btn btn-outline-primary" :style="[
                    { color: themeColor },
                    { borderColor: themeColor },
                  ]">Lire la suite</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.article-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.article-snippet {
  font-size: 1rem;
  margin-bottom: 20px;
}
</style>
