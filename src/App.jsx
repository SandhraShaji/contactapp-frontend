import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Admin from './Components/Admin';
import Edit from './Components/Edit';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import View from './Components/View';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <Routes>
          <Route path='/' element={<Admin/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/view/:name' element={<View/>}/>
          <Route path='/edit/:name' element={<Edit/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </section>
      <Footer/>
    </div>
  );
}
export default App;