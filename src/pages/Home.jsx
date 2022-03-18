import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import Navbar from '../components/Navbar';
import { useState } from "react";


const Home = () => {
  const [num, setNum] = useState(0)


  const Increase = () => {

    setNum(num + 1)
  }

  const Decrease = () => {

    setNum(num - 1)
  }
  return (
    <div>
      <Header Increase={Increase}
        num={num}
        Decrease={Decrease} />
      <Navbar />
      <h3>Main</h3>
      <Main  />
      <Footer />
      <Counter

      />

    </div>
  )
}

export default Home