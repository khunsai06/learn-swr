import React from 'react';
import { useGetTodos } from '../../hooks/use-todos';
// import { useSWRConfig, mutate } from 'swr';

const MutationQueries = () => {
   const urlKey = 'http://localhost:5000/todos';
   const { data: todos, error: todosError, mutate } = useGetTodos();

   return (
      <main>
         <h1>Mutation Queries</h1>
         <h4>todos</h4>
         <ul>
            {!todosError && !todos ? (
               <p>loading...</p>
            ) : (
               todos?.map((user: any, index: number) => {
                  return (
                     <li key={index} className="list-item">
                        {user.title}
                     </li>
                  );
               })
            )}
         </ul>
         <div className="">
            <fieldset>
               <legend>Add todos</legend>
               <form
                  action=""
                  method="post"
                  onSubmit={async (event) => {
                     event.preventDefault();
                     const title = (event.target as any)[0].value;
                     await fetch(urlKey, {
                        method: 'POST',
                        headers: {
                           'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ title }),
                     });
                     await mutate();
                  }}
               >
                  <div className="">
                     <input type="text" name="title" defaultValue="something" />
                  </div>
                  <div className="">
                     <button>Submit</button>
                  </div>
               </form>
            </fieldset>
         </div>
      </main>
   );
};

export default MutationQueries;
