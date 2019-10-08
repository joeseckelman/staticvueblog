<template>
	<div id="blogListings">
		<article class="text-left mb-4 blog-post-listing" v-for="post in blogPosts" :key="post.title">
			<a :href="post.link"><h3>{{post.title}}</h3></a>
			<p>{{post.snippet}}</p>
			<em>Posted by {{post.author}} on {{post.date}}</em>
		</article>
		<b-button href="/sample-post" class="btn-squared float-right" variant="outline-dark">
			Older Posts 
			<i class="fa fa-arrow-right"></i>
		</b-button>
	</div>
</template>

<script>
export default {
  props: {
    blogPosts: []
  }
}
</script>