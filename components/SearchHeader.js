import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();
    const inputvalue = searchInputRef.current.value;
    if (!inputvalue.trim()) return;
    router.push(`/search?inputvalue=${inputvalue.trim()}&searchType=`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push('/')}
          width="120"
          height="40"
          className="cursor-pointer"
          objectFit="cover"
          alt="google-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl item-center">
          <input
            type="text"
            defaultValue={router.query.inputvalue}
            ref={searchInputRef}
            className="w-full focus:outline-none"
            placeholder="please try search it works!"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={search} hidden></button>
        </form>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
