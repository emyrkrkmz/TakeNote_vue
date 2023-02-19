<template>
	<v-container class="bg-cyan-lighten-4 rounded-xl mt-4" >
	
	<v-textarea class="mt-4 mr-2"
	  label="Write..."
	  prepend-icon="mdi-book"
	  variant="outlined"
	  autofocus
	  rounded
	  v-model="newNote"
	></v-textarea>
	<row class="d-flex flex-row-reverse">
	<v-btn icon color="blue" size="small" @click="stores.addNote(newNote)" :disabled="!newNote" >
		<v-icon icon="mdi-send" v-if="!editMode"></v-icon>
		<v-icon icon="mdi-save" v-else></v-icon>
	</v-btn>
	</row>
	</v-container>
</template>

<script setup>
import { useStore } from '@/stores/store.js'

import { ref } from 'vue';

const props = defineProps(['editMode'])


const stores = useStore()

const newNote = ref('')

</script>