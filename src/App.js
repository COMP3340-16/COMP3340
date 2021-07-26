import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomeGallery from './components/HomeGallery/HomeGallery'
import Gallery from './components/Gallery/Gallery'
import RecipeIntro from './components/RecipeIntro/RecipeIntro'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (    
    <main> 
      <Navbar />     
      <Switch>
      <Route path='/Gallery' component={Gallery} />
      <Route path='/Recipe' component={RecipeIntro} />
      <Route path='/' component={HomeGallery} />
    </Switch>
    </main>
  );
}

export default App;
