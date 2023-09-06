import './App.css';
import Quiz from './components/Quiz';
import { useState } from 'react';
import { JoinScreen } from './components/JoinScreen';
// import Navbar from './components/Navbar';

function App() {
  const [isQuizStarted, setIsQuizedStarted] = useState(false)
  return (
    <>
    <div className="quiz-container">
      {isQuizStarted ? (
        <Quiz retry={()=>setIsQuizedStarted(true)}/>
      ):(
        <div className="join-container">
          <JoinScreen start={()=>setIsQuizedStarted(true)}/>

        </div>
      )
      }

    </div>
    
    </>
  );
}

export default App;
