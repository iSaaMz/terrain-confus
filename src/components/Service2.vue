<script setup>
import mainPhoto from "../assets/images/service2.jpg";
import exploreTerrain from "../assets/images/explore-terrains.webp";
import histoireAventures from "../assets/images/histoire-aventures.webp";
import GuidesConseils from "../assets/images/guides-conseils.webp";
import EquipementEssentiel from "../assets/images/equipement-essentiel.webp";

const items = [
  {
    id: 1,
    name: "Explorer de Nouveaux Terrains",
    des: "Partez à la découverte des terrains inexplorés et vivez des aventures uniques.",
  },
  {
    id: 2,
    name: "Équipement Essentiel",
    des: "Découvrez les meilleurs équipements pour vos expéditions en terrains difficiles.",
  },
  {
    id: 3,
    name: "Histoires d'Aventures",
    des: "Lisez des récits passionnants d'aventuriers expérimentés.",
  },
  {
    id: 4,
    name: "Guides et Conseils",
    des: "Accédez à des cartes détaillées et des guides pour naviguer dans des terrains confus.",
  },
];
const total = 4;
</script>


<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 order-lg-2 js-custom-dots">
          <a href="#" class="service link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
            <div class="service-icon color-1 mb-4">
              <svg class="bi bi-compass" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM7.002 4.533a.5.5 0 0 1 .648-.648l4.667 1.867a.5.5 0 0 1 0 .928l-4.667 1.867a.5.5 0 0 1-.648-.648l1.181-2.957zM7.5 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ items[0].name }}</h3>
              <p>{{ items[0].des }}</p>
            </div>
          </a>
          <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="100">
            <div class="service-icon color-2 mb-4">
              <svg class="bi bi-backpack" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM4 5a1 1 0 0 1 1 1v1H3V6a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v1h-2V6a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ items[1].name }}</h3>
              <p>{{ items[1].des }}</p>
            </div>
          </a>
          <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="200">
            <div class="service-icon color-3 mb-4">
              <svg class="bi bi-book" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M1 2.828V14h14V2.828a2 2 0 0 0-.586-1.414l-.293-.293A2 2 0 0 0 13.172 1H2.828A2 2 0 0 0 1.293 2.293l-.293.293A2 2 0 0 0 1 2.828zM2 2h12v12H2V2z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ items[2].name }}</h3>
              <p>{{ items[2].des }}</p>
            </div>
          </a>
          <a href="#" class="service link horizontal d-flex" data-aos="fade-left" data-aos-delay="300">
            <div class="service-icon color-4 mb-4">
              <svg class="bi bi-map" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M0 1a1 1 0 0 1 1-1h1a1 1 0 0 1 .7.3l3.6 3.6L10 1.6a1 1 0 0 1 .7-.3h1a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-1a1 1 0 0 1-.7-.3L6 11.4l-4.3 4.3A1 1 0 0 1 1 16H0V1zm11-1v2h2V1a1 1 0 0 0-1-1h-1zm-6 2L1 0H0v13.6l4-4V2zm0 10.6l4-4L14 16H1l4-3.4z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ items[3].name }}</h3>
              <p>{{ items[3].des }}</p>
            </div>
          </a>
        </div>
        <div class="col-lg-7">
          <div class="img-shadow">
            <div class="owl-single no-dots owl-carousel">
              <div class="item">
                <span class="number">{{ items[0].id }}/{{ total }}</span>
                <img :src="exploreTerrain" alt="Image" class="img-fluid" />
              </div>
              <div class="item">
                <span class="number">{{ items[1].id }}/{{ total }}</span>
                <img :src="EquipementEssentiel" alt="Image" class="img-fluid" />
              </div>
              <div class="item">
                <span class="number">{{ items[2].id }}/{{ total }}</span>
                <img :src="histoireAventures" alt="Image" class="img-fluid" />
              </div>
              <div class="item">
                <span class="number">{{ items[3].id }}/{{ total }}</span>
                <img :src="GuidesConseils" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
