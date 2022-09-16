import React, { useEffect } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Dashbord from './components/dashbord/Dashbord';
import { AxiosInstance } from './axios/axios';


function App() {
    useEffect(()=>{
      // AxiosInstance.get('live/country/south-africa/status/confirmed/from=2021-03-01T00:00:00Z&to=2022-04-01T00:00:00Z').then(res=>console.log(res))
      AxiosInstance.get('live/country/south-africa/status/confirmed').then(res=>console.log(res))
    })
  return (
    <div className="App">
      <Layout title='Covid-19 Live'>
        <Dashbord/>
      </Layout>
    </div>
  );
}

export default App;
