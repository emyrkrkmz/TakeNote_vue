import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

const routes =[
	{
		path: '/',
		name: 'notes',
		component: ViewNotes,
	},
	{
		path: '/editnote/:id',
		name: 'edit',
		component: ViewEditNote,
	},
	{
		path: '/stats',
		name: 'stats',
		component: ViewStats
	}
]


const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router