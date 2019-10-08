<template>
  <div id="app" class="container-fluid px-0">
    <div id="topNav" class="d-table p-1 fixed-top w-100">
      <div class="d-table-cell align-middle">
        <h1 class="my-0 mr-md-auto font-weight-normal text-left display-5">Technology Blob</h1>
      </div>
      <div class="d-table-cell align-middle">
        <b-nav id="nav" class="nav d-none d-sm-none d-md-inline-flex float-right">
          <b-nav-item v-bind:class="{ active: route.path === $router.currentRoute.path }" v-for="route in $router.options.routes" :key="route.path" v-bind:href="route.path">
              {{route.name}}
          </b-nav-item>
        </b-nav>
        <a class="btn btn-light d-inline d-md-none float-right" id="mobileMenuToggle" href="#">
          Menu 
          <i class="fa fa-bars"></i>
        </a>
        <div class="d-none">
          <font-awesome-icon icon="check" :mask="['far', 'square']" size="lg" />
          
          <a class="" href="#">

            <font-awesome-layers class="fa-lg">
              <font-awesome-icon icon="circle" />
              <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'black' }" />
            </font-awesome-layers>

          </a>
        </div>
      </div>
    </div>
    <aside id="mobileNav" class="side-nav bg bg-gray shadow">
      <h2 class="my-0 mr-md-auto font-weight-normal">
        Technology Blob
      </h2>
      <hr />
      <b-nav vertical width="w-100" text-left>
        <b-nav-item v-bind:class="'text-left ' + (route.path === $router.currentRoute.path ? 'active' : '')" v-for="route in $router.options.routes" :key="route.path" v-bind:href="route.path">
            {{route.name}}
        </b-nav-item>
      </b-nav>
      <hr />
      <SocialMediaLinks />
    </aside>
    <div id="content-block" class="clearfix">
      <router-view/>
    </div>
    <footer class="bg bg-white mt-3">
      <SocialMediaLinks />
      Copyright <i class="fa fa-copyright"></i> Demo Website
    </footer>
  </div>
</template>

<style lang="scss">
@import 'custom.scss'
</style>

<script>
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  components: {
    SocialMediaLinks
  }
}
</script>