<script setup>
import { contactInfo } from "../data/items";

const copyrightText = "Copyright © 2023 Terrain Confus - All rights reserved.";
const column1Heading = "Terrain confus";
const column1Text =
  "Terrain Confus est un blog d'aventure consacré à l'exploration de terrains difficiles et mystérieux.";
const column2Heading = "Projets";
const column3Heading = "Services";
const column4Heading = "Contact";

const connectHeading = "Nos réseaux sociaux";

const socialItems = [
  {
    link: "https://www.instagram.com/terrainconfus/",
    icon: "icon-instagram",
  },
  {
    link: "https://x.com/ConfusTerr89069/",
    icon: "icon-twitter",
  },
  {
    link: "https://www.facebook.com/profile.php?id=61560087722545",
    icon: "icon-facebook",
  },
  {
    link: "https://www.linkedin.com/",
    icon: "icon-linkedin",
  },
  {
    link: "https://www.pinterest.com/",
    icon: "icon-pinterest",
  },
];

const projects = [
  "Expédition Amazonie",
  "Traversée du Sahara",
  "Aventure Himalaya",
  "Exploration Arctique",
  "Randonnée en Forêt Noire",
];

const services = [
  "Guides Personnalisés",
  "Cartographie Interactive",
  "Conseils d'Experts",
  "Équipement d'Aventure",
  "Formations en Navigation",
];
</script>


<template>
  <div class="site-footer">
    <div class="footer-dots"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="widget">
            <h3>{{ column1Heading }}</h3>
            <p>{{ column1Text }}</p>
          </div>
          <div class="widget">
            <h3>{{ connectHeading }}</h3>
            <ul class="list-unstyled social">
              <li style="margin-right: 4px">
                <a :href="socialItems[0].link"><span :class="socialItems[0].icon"></span></a>
              </li>
              <li style="margin-right: 4px">
                <a :href="socialItems[1].link"><span :class="socialItems[1].icon"></span></a>
              </li>
              <li style="margin-right: 4px">
                <a :href="socialItems[2].link"><span :class="socialItems[2].icon"></span></a>
              </li>
              <li style="margin-right: 4px">
                <a :href="socialItems[3].link"><span :class="socialItems[3].icon"></span></a>
              </li>
              <li>
                <a :href="socialItems[4].link"><span :class="socialItems[4].icon"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 ml-auto">
          <div class="widget">
            <h3>{{ column2Heading }}</h3>
            <ul class="list-unstyled float-left links">
              <li v-for="project in projects" :key="project"><a href="#">{{ project }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="widget">
            <h3>{{ column3Heading }}</h3>
            <ul class="list-unstyled float-left links">
              <li v-for="service in services" :key="service"><a href="#">{{ service }}</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="widget">
            <h3>{{ column4Heading }}</h3>
            <address>{{ contactInfo.address }}</address>
            <ul class="list-unstyled links mb-4">
              <li>
                <a :href="'tel://' + contactInfo.phone1">{{
                  contactInfo.phone1
                }}</a>
              </li>
              <li>
                <a :href="'tel://' + contactInfo.phone2">{{
                  contactInfo.phone2
                }}</a>
              </li>
              <li>
                <a :href="'mailto:' + contactInfo.email"><span>{{ contactInfo.email }}</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p>
            {{ copyrightText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
