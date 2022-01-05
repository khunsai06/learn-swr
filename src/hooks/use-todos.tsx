import useSWR from 'swr';

export const useGetTodos = () => {
   const urlKey = 'http://localhost:5000/todos';
   const _ = useSWR(urlKey, (...args) =>
      fetch(...args).then((res) => res.json())
   );
   return _;
};
