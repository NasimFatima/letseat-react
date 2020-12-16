/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import 'semantic-ui-css/semantic.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'
import { Headers } from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact render={(props) => <route.component {...props} />}></Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
