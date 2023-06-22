import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import TableCell from '../src/components/TableCell.vue'

describe('TableCell Component', () => {
    const wrapper = mount(TableCell, {
        image: "mockimage",
        title: "mock-title",
        path: "mockpath"
    })

    it('should render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })
});