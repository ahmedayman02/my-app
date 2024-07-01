
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Add from './pages/Add';
import Details from './pages/Detailes';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
<>
<Navbar/>


<div className="container-fluid">

<div className="row">
<div className="col-2 sidebar">
<Sidebar/>

</div>


<div className="col-9">
<Routes>

<Route path='/' element ={<Home/>}/>
<Route path='products' element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path='add' element={<Add  />} />
          <Route path=':productID' element={<Details />} />
          <Route path='edit/:id' element={<Edit />} />
        </Route></Routes>
  
</div>

</div>




</div>










</>

    </div>
  );
}

export default App;
