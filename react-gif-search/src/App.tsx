import React, { useState } from 'react';
import './App.css';
import GifGridView from './components/GifGridView';
import KeywordInput from './components/KeywordInput';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import GifDetailPage from './pages/GifDetailPage';

function App() {

  const [value, setValue] = useState();

  return (
    <>
      <Router>
        <div className="App">
        < h1>Keyword : {value?? "None"}</h1>
          <KeywordInput props={{
            setValue: setValue
          }}/>
        </div>
        <GifGridView keyword={{keyword : value}}/>
        <Switch>
        <Route path="/gif_detail_page" exact component={GifDetailPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
