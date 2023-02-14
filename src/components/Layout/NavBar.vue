<template>
	<v-card max-width="448" class="mx-auto" color="grey-lighten-3">
	  <v-layout>
		<v-app-bar
		  color="teal-darken-4"
		  image="https://picsum.photos/1920/1080?random" 
		  >
		  <template v-slot:image>
			<v-img
			  gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
			></v-img>
		  </template>

  
		  <v-app-bar-title class="text-h6 text-md-h5 text-lg-h4 ml-">TakeNotes</v-app-bar-title>
  
		  <v-spacer></v-spacer>
  
		  <v-btn to="/">Notes</v-btn>
  
		  <v-btn to="/stats">Stats</v-btn>

		</v-app-bar>
	  </v-layout>
	</v-card>
  </template>