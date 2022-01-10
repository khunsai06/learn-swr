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
            <button disabled={true}>{pageIndex}</button>
            <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
         </div>
      </main>
   );
};

const Page = ({ pageIndex }: { pageIndex: number }) => {
   const { data: posts, error: postsError } = usePosts(pageIndex, 4);
   // * use previous data before new data arrive
   const postsRef = React.useRef();
   if (posts) postsRef.current = posts;
   const _posts = postsRef.current;

   return (
      <div className="card-group">
         {(_posts as any)?.map((post: any, index: number) => {
            return (
               <div className="card" key={index}>
                  <div className="card-body">
                     <h4>{post.title}</h4>
                     <p>{post.body}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default PaginationQueries;
