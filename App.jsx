import React from 'react';
import Header from './components/Header/Header';
import CardForm from './components/CardForm/CardForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <CardForm />
      </main>
      <Footer />
    </>
  );
}

export default App;