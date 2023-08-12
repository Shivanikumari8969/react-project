import React from 'react';
import TopNav from './components/Topnav';
import Featured from './components/featured';
import Delivery from './components/delivery';
import TopPicks from './components/toppicks';
import Meal from './components/meal';
import Categories from './components/categories'; // Component name should be capitalized
import Newsletter from './components/newletters';
import Footer from './components/footer'; // Corrected component name

  
function App() {
  return (
    <div className="App">
     <TopNav/>
     <Featured/>
     <Delivery/>
     <TopPicks/>
     <Meal/>
     <Categories/>
     <Newsletter/> 
     <Footer/>{/* Corrected component name */}
    </div>
  );
}

export default App;
