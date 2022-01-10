import React from 'react';
import { useInfinitePosts } from '../../hooks/use-posts';

const InfiniteQueries = () => {
   const { data, size, setSize, isValidating } = useInfinitePosts();
   return (
      <main>
         <h1>Infinite Queries</h1>
         <h4>posts</h4>
         {data?.map((posts, index) => {
            return <Pages posts={posts} key={index} />;
         })}
         <div className="">
            <button
               onClick={() => {
                  setSize(size + 1);
               }}
               disabled={isValidating}
            >
               {isValidating ? 'Loading...' : 'Load More'}
            </button>
         </div>
      </main>
   );
};

const Pages = ({ posts }: { posts: any[] }) => {
   return (
      <div className="card-group">
         {posts?.map((post: any, index: number) => {
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
export default InfiniteQueries;
