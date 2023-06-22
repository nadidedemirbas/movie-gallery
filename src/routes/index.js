import { createRouter, createWebHashHistory } from 'vue-router';
import GalleryIndex from "../components/GalleryIndex.vue";
import MovieDetail from "../components/MovieDetail.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: GalleryIndex
        },
        {
            path: '/detail/:id',
            name: "MovieDetail",
            component: MovieDetail
        }
    ]
});