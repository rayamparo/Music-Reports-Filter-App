import React, { createContext, useState } from 'react';

export const FilterContext = createContext(null);

export default ({ children }) => {
    const [filterInfo, setFilterInfo] = useState([]);
    const [secFilterInfo, setSecFilterInfo] = useState([]);

    const filters = {
        filterInfo: [filterInfo, setFilterInfo],
        secFilterInfo: [secFilterInfo, setSecFilterInfo]
    };

    return <FilterContext.Provider value={filters}>{children}</FilterContext.Provider>
};