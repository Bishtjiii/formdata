import logo from './logo.svg';
import './App.css';
//import Forms from "./Forms";
//import Register  from './Register';
//import Register2  from './Register2';
import FormikForm from './components/FormikForm';
import SignupForm from './components/SignupForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Nopage from './components/Nopage';
import Product from './components/Product';
import Feature from './components/Feature';
import Newproduct from './components/Newproduct';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='login' element={<FormikForm />} />
         <Route path='register' element={<SignupForm />} />
         <Route path='summary' element={<Summary />} />
         <Route path='Product' element={<Product />}>
            <Route path='feature' element={<Feature />}></Route>
            <Route path='newproduct' element={<Newproduct />}></Route>
         </Route>
         <Route path='*' element={<Nopage />} />
       </Routes>
       
        {/* <SignupForm /> */}
        {/* <FormikForm /> */}
        {/* <Forms /> */}
        {/* {<Register />} */}
        {/* {<Register2 />} */}
      </header>
    </div>
  );
}

export default App;
