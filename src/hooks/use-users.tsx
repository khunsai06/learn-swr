import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

export const usePeoples = () => {
   const urlKey = 'https://swapi.dev/api/people';
   const _ = useSWRImmutable(urlKey, (...args) =>
      fetch(...args).then((res) => res.json())
   );
   return _;
};

export const usePlanets = (shouldFetch: boolean) => {
   const urlKey = 'https://swapi.dev/api/planets';
   const _ = useSWRImmutable(shouldFetch ? urlKey : null, (...args) =>
      fetch(...args).then((res) => res.json())
   );
   return _;
};
