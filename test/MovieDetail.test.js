import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import MovieDetail from '../src/components/MovieDetail.vue'

const mockMovie = {
    Title: 'mock-title',
    Poster: 'mock-poster',
    Plot: 'mock-plot',
    Released: 'mock-release-date',
    imdbRating: 'mock-rating',
    Genre: 'mock-genre',
    Awards: 'mock-awards'
}

const mockRoute = {
    params: {
        id: 1
    }
}

describe('MovieDetail Component', () => {
    const wrapper = mount(MovieDetail, {
        props: {
            movie: mockMovie
        },
        global: {
          mocks: {
            $route: mockRoute
          }
        }
    });

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
});