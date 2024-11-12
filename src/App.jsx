import logo from './logo.svg';
import './App.css';
import { SayHello } from './Components/SayHello';
import { DispayCard } from './Components/DisplayCard';
import { Counter } from './Components/Counter';
import  UserAuth  from './Components/UserAuth';
import { EventsListing } from './Components/Events-listing';



function App() {
  return (
    <div className="App">
    <Counter/>
    <Counter/>
    </div>
  );
}
export default App;
