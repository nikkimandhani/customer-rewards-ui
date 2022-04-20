import './App.css';
import Layout from './component/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CustomerRewards from "./container/Customer/CustomerRewards";

function App() {
  return (
    <div className="App">
      <Layout>
          <Routes>
              <Route path='/' exact element={<CustomerRewards/>}/>
          </Routes>
      </Layout>
    </div>
  );
}


export default App;
