import React from 'react';
import { usePosts } from '../../hooks/use-posts';

const PaginationQueries = () => {
   const [pageIndex, setPageIndex] = React.useState(1);

   return (
      <main>
         <h1>Pagination Queries</h1>
         <h4>posts</h4>
         <Page pageIndex={pageIndex} />
         <div className="btn-group">
            <button
               onClick={() => setPageIndex(pageIndex - 1)}
               disabled={pageIndex <= 1}
            >
               Previous
            </button>
            <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
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

export default PaginationQueries;
