<script setup>
import { themeColor } from "../data/items";
import personPhoto from "../assets/images/person_1.jpg";
import mainPhoto from "../assets/images/service1.jpg";
import terrainConfus from "../assets/images/terrain-confus-main.webp";

const service1Heading = "Guides et Conseils";
const service1SubHeading = "Explorez les Terrains Confus";
const service1Quote =
  '"Accédez à des cartes détaillées et des guides pour naviguer dans des terrains confus. Des experts partagent leurs expériences pour vous aider à explorer en toute sécurité."';
const personName = "Alex Dupont";
const designation = "Explorateur et Auteur";
function youtubeVideoUrl() {
  return `https://youtu.be/Gx543KbuGFY?t=39`;
}
</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <span class="caption" data-aos="fade-up" data-aos-delay="0" :style="[{ color: themeColor }]">{{
            service1Heading }}</span>
          <h3 class="heading mb-4" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              Découvrez des conseils d'experts et des guides détaillés pour naviguer à travers les terrains les plus
              difficiles. Apprenez à utiliser des cartes et des boussoles pour ne jamais vous perdre.
            </p>
            <ul class="list-unstyled ul-check primary">
              <li>Cartes détaillées et précises</li>
              <li>Conseils pratiques d'explorateurs expérimentés</li>
            </ul>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="untree_co-testimonial d-flex">
              <div class="text">
                <blockquote>
                  {{ service1Quote }}
                </blockquote>
                <div class="author d-flex">
                  <div class="pic mr-3">
                    <img :src="personPhoto" alt="Image" class="img-fluid" />
                  </div>
                  <div>
                    <strong class="d-block">{{ personName }}</strong><span class="d-block">{{ designation }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
          <a :href="youtubeVideoUrl()" class="btn-video" data-fancybox>
            <span class="wrap-icon-play">
              <svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
            </span>
            <img :src="terrainConfus" alt="Image" class="img-fluid img-shadow" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
