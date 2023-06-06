import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo, useEffect,useState} from 'react';

import {SectionId} from '../../data/data';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const Footer: FC = memo(() => {
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useEffect(() => {
    setCurrentYear(getCurrentYear());
  }, []);

 

  return (
    <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
      <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
        <a
          className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
          href={`/#${SectionId.Hero}`}
        >
          <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <span className="text-sm text-neutral-700">
          © {currentYear} Chin Siang Hao
        </span>
      </div>
    </div>
  );
});
Footer.displayName = 'Footer';
export default Footer;
