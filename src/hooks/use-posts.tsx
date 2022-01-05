import useSWRImmutable from 'swr/immutable';

export const usePosts = (pageIndex: number) => {
   const query = `_page=${pageIndex}&_limit=4`;
   const urlKey = `https://jsonplaceholder.typicode.com/posts?${query}`;
   const _ = useSWRImmutable(urlKey, (...args) =>
      fetch(...args).then((res) => res.json())
   );
   return _;
};
