<script setup>
import { themeColor, siteName } from "../data/items";
</script>
<template>
  <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a href="" class="logo m-0 float-left">{{ siteName }}<span class="text-primary">.</span></a>
        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left">
          <li class="active">
            <a href="/" class="nav-link">Accueil</a>
          </li>
          <li class="has-children">
            <a href="#" class="nav-link">Témoignages</a>
            <ul class="dropdown">
              <li>
                <a href="#testimonials-section" class="nav-link">Retours</a>
              </li>
              <li><a href="#" class="nav-link">Menu deux</a></li>
              <li><a href="#" class="nav-link">Menu trois</a></li>
            </ul>
          </li>
          <li><a href="/blog" class="nav-link">Blog</a></li>
          <li><a href="#features-section" class="nav-link">Guides</a></li>
          <li><a href="#pricing-section" class="nav-link">Tarifs</a></li>
          <li><a href="#about-section" class="nav-link">À Propos</a></li>
          <li><a href="#contact-section" class="nav-link">Contactez-nous</a></li>
        </ul>
        <ul class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
          <li class="cta-button-outline" style="margin-right: 5px;"><a href="#">Connexion</a></li>
          <li class="cta-primary">
            <a href="#" :style="[{ backgroundColor: themeColor }]">Inscription</a>
          </li>
        </ul>
        <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
          data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>
      </div>
    </div>
  </nav>
</template>
