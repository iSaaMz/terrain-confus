<script setup>
import { themeColor } from "../data/items";
const heading = "Tarifs";
const subHeading = "Des plans pour tous les explorateurs. Choisissez le vôtre dès maintenant !";
const startButtonName = "Commencer";
const packages = [
  {
    name: "Gratuit",
    price: "0",
  },
  {
    name: "Standard",
    price: "19.99",
  },
  {
    name: "Premium",
    price: "79.99",
  },
];
</script>

<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[0].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"><sup>$</sup><span>{{ packages[0].price
                        }}</span></span>
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Accès aux articles de blog</li>
                    <li>Conseils de base pour l'exploration</li>
                    <li>Cartes simplifiées</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-outline-primary" :style="[
                      { color: themeColor },
                      { borderColor: themeColor },
                    ]">{{ startButtonName }}</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[1].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"><sup>$</sup><span>{{ packages[1].price
                        }}</span></span>
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Accès complet aux articles de blog</li>
                    <li>Guides détaillés pour l'exploration</li>
                    <li>Cartes interactives</li>
                    <li>Accès aux forums de discussion</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-primary" :style="[
                      { backgroundColor: themeColor },
                      { borderColor: themeColor },
                    ]">{{ startButtonName }}</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[2].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"><sup>$</sup><span>{{ packages[2].price
                        }}</span></span>
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Accès complet aux articles de blog</li>
                    <li>Guides détaillés pour l'exploration</li>
                    <li>Cartes interactives et personnalisées</li>
                    <li>Accès aux forums de discussion</li>
                    <li>Consultations avec des experts</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a href="#" class="btn btn-outline-primary" :style="[
                      { color: themeColor },
                      { borderColor: themeColor },
                    ]">{{ startButtonName }}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
