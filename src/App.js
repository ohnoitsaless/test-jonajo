import React from 'react';
import NumberOperator from './components/NumberOperator/numberOperator';
import { Provider } from "react-redux";
import configureStore, { history } from "./store";

export const store = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableEntries: [1, 2, 3]
    }
  }

  render () {
    return (
      <Provider store={store}>
      <div className='container'>
        <div styleName='table-container'>
        <NumberOperator />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
