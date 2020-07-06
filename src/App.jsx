import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";

function App() {
    return <div>
        <Header/>
        {notes.map( x => <Note key={x.key} header={x.title} text={x.content}/> )}
        <Footer/>
    </div>
}

export default App;