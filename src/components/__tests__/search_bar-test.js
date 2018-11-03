import React from 'react';
import TestUtils from 'react-dom/test-utils';

import SearchBar from '../search_bar';

describe('SearchBar', () => {
    it('wraps content in a div with .search-bar class', () => {
        const wrapper = TestUtils.renderIntoDocument(<SearchBar />);
        const node = TestUtils.findRenderedDOMComponentWithClass(
            wrapper,
            'search-bar'
        );
    });
});
