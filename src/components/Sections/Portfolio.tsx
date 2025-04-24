import moment from 'moment';
import {FC, memo, useEffect, useRef, useState} from 'react';
import {_} from 'ts-pattern/dist/patterns';
import Typed from 'typed.js';

import {Api, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [repos, setRepos] = useState<PortfolioItem[]>([]);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['.', '..', '...'],
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: false,
      loop: true,
    });

    const fetchData = async () => {
      try {
        const response = await fetch(Api.value);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
    
        const forkedRepos = data.filter((repo: any) => repo.fork === false);
        setRepos(forkedRepos);
      } catch (err: unknown) {
        console.error(err);
      }
    };
    fetchData();

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-4">
        <h2 className="mb-4 self-center text-2xl font-bold text-white">Explore My Star Project</h2>
        {repos.length === 0 ? (
          <p className="gap-y-4 self-center text-white">
            Work in Progress <span ref={el}></span>
          </p>
        ) : (
          <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mx-auto">
          {repos.map((item, index) => {
            const {name, created_at, svn_url, description} = item;
            const formattedDate = moment(created_at).format('YYYY-MM-DD');
            return (
              <a
                className="relative block h-40 w-80 overflow-hidden rounded-lg bg-white shadow-lg hover:bg-gray-100"
                href={svn_url}
                key={index}
              >
                <div className="p-4">
                  <h2 className="text-lg font-semibold">
                    <span
                      className="text-black"
                      style={{
                        borderBottom: '2px solid #fb923c',
                        paddingBottom: '2px',
                      }}
                    >
                      {name}
                    </span>
                  </h2>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="p-4">
                    <p
                      className="text-gray-800"
                      style={{
                        userSelect: 'none',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        maxWidth: '250px',
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-4 opacity-90">
                  <p className="text-gray-600">{formattedDate}</p>
                </div>
              </a>
            );
          })}
        </div>
        
        
        )}
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
