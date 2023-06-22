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
        data() {
            return {
                movie: mockMovie
            }
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

    it('should show movie title correctly', () => {
        const title = wrapper.find('.detail-title').text();
        expect(title).toBe('mock-title');
    })

    it('should show plot correctly', () => {
        const plot = wrapper.find('.detail-plot').text();
        expect(plot).toBe('Plot: mock-plot')
    })

    it('should show more details', () => {
        const moreDetailsWrapper = wrapper.find('.detail-more').text();
        expect(moreDetailsWrapper).toContain('mock-rating')
        expect(moreDetailsWrapper).toContain('mock-genre')
        expect(moreDetailsWrapper).toContain('mock-awards')
        expect(moreDetailsWrapper).toContain('mock-release-date')
    })
});