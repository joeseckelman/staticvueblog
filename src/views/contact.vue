<template>
	<div class="home">
		<div class="jumbotron jumbotron-fluid hero-image">
			<div class="hero-content">
				<h2 class="display-4 hero-title">
					Contact Us
				</h2>
				<p class="lead">Have Questions? We Have Answers.</p>
			</div>
		</div>
		<div class="col-12 col-md-6 offset-md-3">
			<div :class="{'alert alert-success clearfix': true, 'd-none':!formSent}">
				<i class="fa fa-check"></i> An Email has been sent to us and we look forward to getting back to you!
			</div>
			<b-form :class="{'form-control-plaintext':true, 'd-none':formSent}" @submit="onSubmit" @reset="onReset" v-if="show">
				<p class="text-left">
					Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!
				</p>
				<b-form-group id="input-group-2" aria-label="Your Name:" label-for="name">
					<b-form-input
						id="name"
						v-model="form.name" 
						:class="{'form-control-plaintext form-control-squared sleek':true, 'is-invalid': !formName && formNameBlurred}"
						placeholder="Enter name" 
					></b-form-input>
				</b-form-group>
				<b-form-group
					id="input-group-email"
					aria-label="Email address:"
					label-for="email" 
				>
					<b-form-input
						id="email"
						v-model="form.email"
						type="text" 
						:class="{'form-control-plaintext form-control-squared sleek':true, 'is-invalid': !formEmail && formEmailBlurred}"
						placeholder="Enter email" 
						class="form-control-plaintext form-control-squared sleek"
					></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-phone" aria-label="Your Name:" label-for="phonenumber">
					<b-form-input
						id="phonenumber"
						v-model="form.number"
						placeholder="Phone Number" 
						:class="{'form-control-plaintext form-control-squared sleek':true, 'is-invalid': !formNumber && formNumberBlurred}"
					></b-form-input>
				</b-form-group>
				<b-form-group id="input-group-message" aria-label="Message" label-for="message">
					<b-form-textarea
						id="message"
						v-model="form.message"
						placeholder="Message"
						rows="5"
						max-rows="6" 
						:class="{'form-control-plaintext form-control-squared sleek':true, 'is-invalid': !formMessage && formMessageBlurred}"
					></b-form-textarea>
				</b-form-group>
				<b-form-group>
					<b-button class="btn-squared float-left" variant="outline-dark" type="submit">SEND</b-button>				
				</b-form-group>
			</b-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					name: '',
					number: '',
					message: '',
				},
				formName: null,
				formNameBlurred: false,
				formEmail: null,
				formEmailBlurred: false,
				formNumber: null,
				formNumberBlurred: false,
				formMessage: null,
				formMessageBlurred: false,
				show: true,
				formSent:false,
			}
		},
		methods: {
			validateform: function() {
				let errors = 0;
				this.formEmail = false;
				this.formEmailBlurred = true;
				this.formName = false;
				this.formNameBlurred = true;
				this.formNumber = false;
				this.formNumberBlurred = true;
				this.formMessage = false;
				this.formMessageBlurred = true;
				if(this.form.email.length > 0){
					const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
					let emailVal = emailRegex.test(this.form.email);
					if(emailVal){
						this.formEmail = true;
					} else {
						errors++;
					}
				}
				if (this.form.name.length > 0) {
					this.formName = true;
				} else {
					errors++;
				}
				if (this.form.number.length > 0) {
					this.formNumber = true;
				} else {
					errors++;
				}
				if (this.form.message.length > 0) {
					this.formMessage = true;
				} else {
					errors++;
				}

				return errors > 0 ? false : true;
			},
			onSubmit(evt) {
				evt.preventDefault();
				let _this = this;
				if(this.validateform()){
					this.formSent = true;
					// Wanted to setup node mailer but figured i'd send a real email with episerver.
					setTimeout(function(){
						_this.formSent = false;
					},2500);
				} else {
					this.formSent = false;
				}
			},
			onReset(evt) {
				evt.preventDefault();
				// Reset our form values
				this.form.email = '';
				this.form.name = '';
				this.form.number = '';
				this.form.message = '';
				// Trick to reset/clear native browser form validation state
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			}
		}
	}
</script>


<style scoped lang="scss">
	@import '../_custom_mixins';
	.hero-image {
		@include setFilterOnImage('contact_us_image.jpg',0.7);
	}
</style>