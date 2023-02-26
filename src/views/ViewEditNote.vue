<template>
	<v-container class="mt-5 bg-blue-grey-darken-1 rounded-shaped">
		<h1>Edit Note</h1>
		<AddEditNote
			v-model="upnote"
		>

		<template #buttons>
			<v-btn 
			:disabled="!upnote"
			color="teal-darken-3"
			>
				<v-icon icon="mdi-content-save"></v-icon>
			</v-btn>

			<v-btn color="white" class="mr-3" to="/">
				Cancel
			</v-btn>

		</template>
		</AddEditNote>
	</v-container>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';


import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store.js';
import { ref } from 'vue';

const stores = useStore()
const router = useRoute()

const upnote = ref("")

upnote.value = stores.getNoteContent

</script>