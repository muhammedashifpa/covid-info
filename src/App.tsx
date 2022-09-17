import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Dashbord from './components/dashbord/Dashbord';


function App() {
  return (
    <div className="App">
      <Layout title='Covid-19 Live'>
        <Dashbord/>
      </Layout>
    </div>
  );
}

export default App;
