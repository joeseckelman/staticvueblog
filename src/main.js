import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  template:'<App/>',
  data: function() {
    return {
      siteTitle: 'Site Title here'
    }
  },
  build: {
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  }
}).$mount('#app')

window.onscroll = function changeNav(){
	var scrollPosY = window.pageYOffset | document.body.scrollTop;

    var navBar = document.getElementById('topNav'),
          navBarHeight = navBar.getBoundingClientRect().height;

    if(scrollPosY <= navBarHeight) {
          navBar.className = ('d-table p-1 fixed-top w-100');
    } else if(scrollPosY >= navBarHeight) {
         navBar.className =  ('d-table p-1 fixed-top w-100 border-bottom shadow-sm scrolling');
    }
}

document.addEventListener('click', function (event) {
	const appElement = document.querySelector("#app");
	const mobileNavEle = document.querySelector("#mobileNav");
	if (event.target.matches('#mobileMenuToggle')) {
		event.preventDefault();
		if(!appElement.classList.contains("show-mobile-nav")){
			appElement.classList.add("show-mobile-nav");
		} else {
			appElement.classList.remove("show-mobile-nav");
		}
	} else {
		// click outside of the menu ~ would close it
		if(!mobileNavEle.contains(event.target)){
			appElement.classList.remove("show-mobile-nav");
		} 
	}
	// Don't follow the link
}, false);