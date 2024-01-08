import React from 'react';
import PriceFilter from './PriceFilter';
import BrandFilter from './BrandFilter';
import ModelFilter from './ModelFilter';
import SubcategoriesFilter from './SubcategoriesFilter';
import StateFilter from './StateFilter';
import DistrictFilter from './DistrictFilter';
import BlockFilter from './BlockFilter';

const FiltersMenu = (props) => {
	const { selectedFilters, setSelectedFilters } = props;

	return (
		<div className="flex flex-col gap-2.5 max-h-min py-4">
			<div className=" hidden lg:block px-4 border-b-2 border-gray-300 h-10">
				<h3 className="text-xl font-bold">Filter</h3>
			</div>

			<div className="px-4 flex flex-col items-start gap-2">
				<PriceFilter setSelectedFilters={setSelectedFilters} />

				<BrandFilter setSelectedFilters={setSelectedFilters} />

				<ModelFilter setSelectedFilters={setSelectedFilters} />

				<SubcategoriesFilter setSelectedFilters={setSelectedFilters} />

				<StateFilter setSelectedFilters={setSelectedFilters} />

				<DistrictFilter setSelectedFilters={setSelectedFilters} />

				<BlockFilter setSelectedFilters={setSelectedFilters} />
			</div>
		</div>
	);
};

export default FiltersMenu;
