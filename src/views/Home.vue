<template>
  <div class="clearfix">
	<div class="jumbotron jumbotron-fluid hero-image">
      <div class="hero-content">
        <h2 class="display-4 hero-title">
			Techno Babble
        </h2>
        <p class="lead">A Technology Blog We Love</p>
      </div>
    </div>
    <div class="col-12 col-md-6 offset-md-3">
		<BlogPostListing :blogPosts="blogPosts"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
	@import '../_custom_mixins';
	.hero-image {
		@include setFilterOnImage('New-York-City-Background_resized.jpg',0.7);
	}
</style>

<script>
// @ is an alias to /src
import BlogPostListing from '@/components/BlogPostListing.vue'

export default {
	name: 'home',
		components: {
		BlogPostListing
	},
	data: function() {
		return {
			blogPosts: [
				{
					title:'Cu timeam latine tamquam pri',
					date:'12/24/2018',
					author:'John Galt',
					snippet:'Lorem ipsum dolor sit amet, cu timeam latine tamquam pri, nobis veniam his ea. Eu vero nonumy per, sensibus pericula definitiones vel id. Accusamus constituto appellantur eam ea, quaeque eloquentiam pro at, id per dolorum placerat. Ut usu habemus molestiae repudiandae.',
					link:'/sample-post',
				},
				{
					title:'Lorem ipsum dolor sit amet',
					date:'12/24/2018',
					author:'Bill Gates',
					snippet:'Lorem ipsum dolor sit amet, cu timeam latine tamquam pri, nobis veniam his ea. Eu vero nonumy per, sensibus pericula definitiones vel id. Accusamus constituto appellantur eam ea, quaeque eloquentiam pro at, id per dolorum placerat. Ut usu habemus molestiae repudiandae.',
					link:'/sample-post',
				},
				{
					title:'Ut usu habemus molestiae repudiandae.',
					date:'12/24/2018',
					author:'Elon Musk',
					snippet:'Lorem ipsum dolor sit amet, cu timeam latine tamquam pri, nobis veniam his ea. Eu vero nonumy per, sensibus pericula definitiones vel id. Accusamus constituto appellantur eam ea, quaeque eloquentiam pro at, id per dolorum placerat. Ut usu habemus molestiae repudiandae.',
					link:'/sample-post',
				}
			],
		}
	},
}
</script>
