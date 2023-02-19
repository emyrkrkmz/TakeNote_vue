<template>
	<v-container class="mt-2" v-for="el in stores.noted" :key="el.id">
	<v-card
	  class="mx-auto bg-cyan-darken-4"
	  width="800"
	  prepend-icon="mdi-pen"
	>
	  <template v-slot:title>
		{{ el.title }}
	  </template>
  
	  <v-card-text class="ml-15">
		{{ el.content }}
	  </v-card-text>

	  <v-card-actions>
		<v-row class="d-flex flex-row-reverse">
			<v-btn class="ml-1 mr-5" variant="text" :to="`/editnote/${el.id}`">
				Edit
			</v-btn>
			<v-btn variant="text" @click="stores.delNote(el.id)">
				Delete
			</v-btn>
		</v-row>
	  </v-card-actions>
	</v-card>
	</v-container>
</template>

<script setup>

import { reactive } from 'vue';
import { useStore } from '@/stores/store.js'

const stores = useStore()


</script>
