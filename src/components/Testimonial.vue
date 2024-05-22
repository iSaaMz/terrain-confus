<script setup>
import { themeColor } from "../data/items";

const heading = "Témoignages";
const subHeading = "Retour d'expérience de nos explorateurs";
const testimonials = [
  {
    name: "Alex Dupont",
    designation: "Explorateur confirmé",
    quote:
      '"Grâce aux conseils de Terrain Confus, j\'ai pu explorer des régions inconnues avec confiance et sécurité. Les guides détaillés sont indispensables!"',
    photo: "images/person_1.jpg", // Remplacer par une image appropriée
  },
  {
    name: "Marie Dubois",
    designation: "Aventurière",
    quote:
      '"Les cartes interactives et les guides proposés par Terrain Confus m\'ont permis de découvrir des paysages incroyables. Une ressource essentielle pour tout aventurier."',
    photo: "images/person_2.jpg", // Remplacer par une image appropriée
  },
  {
    name: "Jean Martin",
    designation: "Randonneur passionné",
    quote:
      '"Terrain Confus offre des outils et des conseils inestimables pour toute personne souhaitant partir à l\'aventure. Je recommande vivement!"',
    photo: "images/person_3.jpg", // Remplacer par une image appropriée
  },
];
</script>


<template>
  <div class="untree_co-section" id="testimonials-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-5 text-center text-lg-left mb-lg-0" data-aos="fade-up" data-aos-delay="0">
          <div class="mb-4">
            <span class="caption" :style="[{ color: themeColor }]">{{
              heading
              }}</span>
            <h2 class="heading">{{ subHeading }}</h2>
          </div>
          <div>
            <a href="#" class="js-custom-prev-v2 cusotm-slider-nav custom-prev" style="margin-right: 5px">
              <span>
                <svg class="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                  <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
            </a>
            <a href="#" class="js-custom-next-v2 cusotm-slider-nav custom-next">
              <span>
                <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="col-lg-8" data-aos="fade" data-aos-delay="200">
          <div class="owl-2-slider owl-carousel">
            <div class="item" v-for="(testimonial, index) in testimonials" :key="index">
              <div class="untree_co-testimonial d-flex">
                <div class="text">
                  <blockquote>
                    {{ testimonial.quote }}
                  </blockquote>
                  <div class="author d-flex">
                    <div class="pic mr-3">
                      <img :src="testimonial.photo" alt="Image" class="img-fluid" />
                    </div>
                    <div>
                      <strong class="d-block">{{ testimonial.name }}</strong><span class="d-block">{{
                        testimonial.designation }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
