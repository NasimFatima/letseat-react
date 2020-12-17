/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import 'semantic-ui-css/semantic.css'
import { BrowserRouter, Switch } from 'react-router-dom'
import { routes } from './routes'
import { RenderRoute } from './routes/routesMapping'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            routes.map((route, index) => (
              <RenderRoute {...route} key={index} />))
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

