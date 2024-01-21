import './App.css';
import CreateFlashCard from './components/CreateFlashCard';
import Faq from './components/Faq';
import Navbar from './components/Navbar';
import RelationAndFunctions from './components/RelationAndFunctions';
import SectionNavigator from './components/SectionNavigator';

function App() {
  return (
    <div className="px-24">
      <Navbar />
      <SectionNavigator />
      <RelationAndFunctions />
      <CreateFlashCard />
      <Faq />
    </div>
  );
}

export default App;