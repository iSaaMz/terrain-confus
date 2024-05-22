<script setup>
import { themeColor } from "../data/items";
import mainPhoto from "../assets/images/about.svg";

const heading = "À propos";
const subHeading = "À propos de notre blog";
const totalAdventures = "150";
const totalStories = "30";
</script>

<template>
  <div class="untree_co-section" id="about-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
          <img :src="mainPhoto" alt="Image" class="img-fluid" />
        </div>
        <div class="col-lg-4">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
            <span class="caption" :style="[{ color: themeColor }]">{{ heading }}</span>
            <h2 class="heading">{{ subHeading }}</h2>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
            <p>
              Bienvenue sur notre blog dédié aux aventures en terrain confus. Nous partageons ici nos expériences et explorations dans des environnements sauvages et peu connus.
            </p>
            <p>
              Notre équipe d'aventuriers
              <span class="highlight">s'engage à fournir des récits captivants, des conseils pratiques et des récits inspirants</span>. Joignez-vous à nous pour découvrir des endroits extraordinaires et vivre des aventures inoubliables.
            </p>
          </div>
          <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
            <li>Récits d'aventures passionnants</li>
            <li>Conseils pratiques pour l'exploration</li>
            <li>Photos et vidéos captivantes</li>
          </ul>
          <div class="row count-numbers">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
              <span class="counter d-block"><span :data-number="totalAdventures">{{ totalAdventures }}</span><span></span></span>
              <span class="caption-2">Aventures partagées</span>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <span class="counter d-block"><span :data-number="totalStories">{{ totalStories }}</span><span></span></span>
              <span class="caption-2">Histoires racontées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
