import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { usePeoples, usePlanets } from './hooks/use-users';
import MutationQueries from './pages/mutation';
import PaginationQueries from './pages/pagination';
import InfiniteQueries from './pages/infintie';

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pagination" element={<PaginationQueries />}></Route>
            <Route path="/infinite" element={<InfiniteQueries />}></Route>
            <Route path="/mutation" element={<MutationQueries />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

const Home = () => {
   const { data: peoples, error: peoplesError } = usePeoples();
   const {
      data: planets,
      error: planetsError,
      isValidating,
   } = usePlanets(!!peoples);

   return (
      <main>
         <h1>Normal Queries</h1>
         <h4>peoples</h4>
         <ul>
            {!peoplesError && !peoples ? (
               <p>loading...</p>
            ) : (
               peoples?.results.map((user: any, index: number) => {
                  return (
                     <li key={index} className="list-item">
                        {user.name}
                     </li>
                  );
               })
            )}
         </ul>
         <h4>planets</h4>
         <ul>
            {isValidating && !planetsError && !planets ? (
               <p>loading...</p>
            ) : (
               planets?.results.map((user: any, index: number) => {
                  return (
                     <li key={index} className="list-item">
                        {user.name}
                     </li>
                  );
               })
            )}
         </ul>
      </main>
   );
};

export default App;
