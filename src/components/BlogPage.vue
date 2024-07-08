<!-- src/views/BlogPage.vue -->
<script setup>
import { ref } from 'vue';

const articles = ref([
    {
        title: "Explorer le Terrain Confus : Guide pour Débutants",
        snippet: "Plongez dans le monde mystérieux du terrain confus avec ce guide complet pour débutants...",
        slug: "guide-debutants-terrain-confus",
    },
    {
        title: "Les Dangers Cachés du Terrain Confus",
        snippet: "Découvrez les pièges et les dangers que cache le terrain confus et comment les éviter...",
        slug: "dangers-terrain-confus",
    },
    {
        title: "Équipements Essentiels pour l'Exploration",
        snippet: "Préparez-vous correctement pour vos aventures en terrain confus avec cette liste d'équipements indispensables...",
        slug: "equipements-exploration-terrain-confus",
    },
    {
        title: "Histoires et Légendes du Terrain Confus",
        snippet: "Plongez dans les récits fascinants et les légendes entourant le mystérieux terrain confus...",
        slug: "histoires-legendes-terrain-confus",
    },
    // Nouveaux articles ajoutés ici
    {
        title: "Techniques Avancées de Survie en Terrain Confus",
        snippet: "Apprenez les techniques avancées de survie nécessaires pour naviguer en terrain confus...",
        slug: "techniques-survie-terrain-confus",
    },
    {
        title: "Cartographie et Orientation en Terrain Confus",
        snippet: "Découvrez comment utiliser la cartographie et les techniques d'orientation pour ne pas vous perdre en terrain confus...",
        slug: "cartographie-orientation-terrain-confus",
    },
    {
        title: "Flore et Faune du Terrain Confus",
        snippet: "Explorez la diversité de la flore et de la faune qui habitent le terrain confus...",
        slug: "flore-faune-terrain-confus",
    },
    {
        title: "Histoires de Survivants : Témoignages en Terrain Confus",
        snippet: "Lisez les histoires inspirantes de ceux qui ont survécu à des expériences en terrain confus...",
        slug: "histoires-survivants-terrain-confus",
    },
    {
        title: "Préparation Physique pour l'Exploration en Terrain Confus",
        snippet: "Préparez votre corps aux rigueurs de l'exploration en terrain confus avec ces conseils d'experts...",
        slug: "preparation-physique-terrain-confus",
    },
    {
        title: "Gestion des Situations d'Urgence en Terrain Confus",
        snippet: "Apprenez à gérer les situations d'urgence que vous pourriez rencontrer en terrain confus...",
        slug: "gestion-urgence-terrain-confus",
    },
    {
        title: "Équipement Technologique pour l'Exploration en Terrain Confus",
        snippet: "Découvrez les derniers équipements technologiques pour faciliter votre exploration en terrain confus...",
        slug: "equipement-technologique-terrain-confus",
    },
]);
</script>

<template>
    <div class="blog-page">
        <h1>Liste des Articles</h1>
        <div class="articles">
            <div class="article" v-for="article in articles" :key="article.slug">
                <h2>{{ article.title }}</h2>
                <p>{{ article.snippet }}</p>
                <router-link :to="{ name: 'ArticlePage', params: { slug: article.slug } }">
                    <button>Voir plus</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-page {
    padding: 80px 20px 20px 20px;
}

.articles {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.article {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
}

.article h2 {
    margin: 0 0 10px;
}

.article p {
    margin: 0 0 20px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #0056b3;
}
</style>
