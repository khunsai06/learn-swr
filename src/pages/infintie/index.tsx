import React from 'react';
import { usePosts } from '../../hooks/use-posts';

const InfiniteQueries = () => {
   const [pageIndex, setPageIndex] = React.useState(1);
   const pages: JSX.Element[] = [];
   for (let i = 0; i < pageIndex; i++) {
      pages.push(<Page pageIndex={pageIndex} key={i} />);
   }

   return (
      <main>
         <h1>Infinite Queries</h1>
         <h4>posts</h4>
         {pages}
         <div className="">
            <button onClick={() => setPageIndex(pageIndex + 1)}>
               Load More
            </button>
         </div>
      </main>
   );
};

const Page = ({ pageIndex }: { pageIndex: number }) => {
   const { data: posts, error: postsError, isValidating } = usePosts(pageIndex);
   return (
      <div className="card-group">
         {!postsError && !posts ? (
            <p>loading...</p>
         ) : (
            posts?.map((post: any, index: number) => {
               return (
                  <div className="card" key={index}>
                     <div className="card-body">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                     </div>
                  </div>
               );
            })
         )}
      </div>
   );
};
export default InfiniteQueries;
