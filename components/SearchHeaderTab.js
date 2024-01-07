import { useRouter } from 'next/router';
const SearchHeaderTab = ({ title, Icon, selected }) => {
  const router = useRouter();
  function selectTab() {
    router.push(
      `/search?inputvalue=${router.query.inputvalue}&searchType=${
        title === 'Images' ? 'image' : ''
      }`
    );
  }
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${
        selected && 'text-blue-500 border-blue-500'
      }`}
      onClick={() => selectTab(title)}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};

export default SearchHeaderTab;
