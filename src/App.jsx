import {
    createBrowserRouter,
    Route, 
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom'
import "./App.css";

//Layouts
import RootLayout from './layouts/RootLayout';


//pages
import New from './components/New';
import Runs, {runsLoader} from './components/Runs';
import RunDetails, {runDetailsLoader} from './components/RunDetails';



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >
             <Route 
                index
                element={<Runs />}
                loader={runsLoader} 
            ></Route>
            <Route  
                path=':id'
                element={<RunDetails />}
                loader={runDetailsLoader}
            ></Route>
           
            <Route path='new' element={<New />} />  
        </Route>
    )
)


function App() {
    return (
          <RouterProvider router={router} />
    );
}

export default App