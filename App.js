import React from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import SubmitButton from './components/SubmitButton';

function App() {
    return (
        <div className="App">
            <Header />
            <StudentList />
            <SubmitButton />
        </div>
    );
}

export default App;
