<template>
	<v-container class="bg-cyan-lighten-4 rounded-xl mt-4" >
	<v-textarea class="mt-4 mr-2"
	  label="Write..."
	  prepend-icon="mdi-book"
	  variant="outlined"
	  autofocus
	  rounded
	></v-textarea>
	<row class="d-flex flex-row-reverse">
	<v-btn icon color="blue" size="small" >
		<v-icon icon="mdi-send"></v-icon>
	</v-btn>
	</row>
	</v-container>
	
	<TakeNotes />
</template>

<script>
import TakeNotes from '@/components/Layout/TakeNotes.vue';
</script>
