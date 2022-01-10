import useSWRImmutable from 'swr/immutable';
import useSWRInfinite from 'swr/infinite';

export const usePosts = (pageIndex: number, limit: number) => {
   const query = `_page=${pageIndex}&_limit=${limit}`;
   const urlKey = `https://jsonplaceholder.typicode.com/posts?${query}`;
   const _ = useSWRImmutable(urlKey, (...args) =>
      fetch(...args).then((res) => res.json())
   );
   return _;
};

export const useInfinitePosts = () => {
   const _ = useSWRInfinite(
      (pageIndex, previousPageData) => {
         console.log('pageIndex', pageIndex);
         console.log('previousPageData', previousPageData);

         if (previousPageData && !previousPageData.length) return null;
         const query = `_page=${pageIndex}&_limit=1`;
         const urlKey = `https://jsonplaceholder.typicode.com/posts?${query}`;
         return urlKey;
      },
      (...args) => fetch(...args).then((res) => res.json())
   );
   return _;
};
