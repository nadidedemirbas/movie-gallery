import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import TableCell from '../src/components/TableCell.vue'

describe('TableCell Component', () => {
    const wrapper = mount(TableCell, {
        props: {
            image: "mockimage",
            title: "mock-title",
            path: "mockpath"
        }
    })

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('should show title correctly', () => {
        const title = wrapper.find('.index-movie-title-wrapper').text()
        expect(title).toBe('mock-title');
    })

    it('should show poster correctly', () => {
        const attributes = wrapper.find('.image-fluid').attributes();
        const source = attributes.src;
        expect(source).toBe('mockimage');
    })
});