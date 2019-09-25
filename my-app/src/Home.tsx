import * as React from 'react';
import {
  Jumbotron
} from 'reactstrap';

class Home extends React.Component {
    public render() {
      return  (
        <div>
          <Jumbotron>
            <h3 className="display-3">Welcome Home!</h3>
          </Jumbotron>
        </div>
      );
    }
  }

export default Home;