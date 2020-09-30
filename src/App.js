import React, { Fragment } from 'react';
import './App.css';
import ImageEditing from './components/imageEditing/ImageEditing';
import SearchImages from './components/searchPage/SearchImages';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (

    <Fragment>
      <Switch>
        <Route exact path="/" component={SearchImages} />
        <Route exact path="/addcaption" component={ImageEditing} />
      </Switch>
    </Fragment>


  );
}

export default App;
