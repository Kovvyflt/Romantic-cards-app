import React, { useState } from 'react';
import Question from './components/Question';
import MemoryCards from './components/MemoryCards';


function App() {
const [showSections, setShowSections] = useState(false);


const handleYes = () => {
setShowSections(true);
window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
};


return (
<div className="App">
<Question onYes={handleYes} />
{showSections && <MemoryCards />}
</div>
);
}


export default App;