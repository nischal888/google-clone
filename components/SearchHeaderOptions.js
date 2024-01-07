import { useRouter } from 'next/router';
import SearchHeaderTab from './SearchHeaderTab';
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline';

const SearchHeaderOptions = () => {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderTab
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === '' || !router.query.searchType}
      />
      <SearchHeaderTab
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  );
};

export default SearchHeaderOptions;
