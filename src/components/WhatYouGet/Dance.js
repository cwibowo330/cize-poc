import React, {Component} from 'react';
import DiscYellow from './DiscYellow';
import DiscBlue from './DiscBlue';
import DiscRed from './DiscRed';
import DanceHeader from './DanceHeader';

class Dance extends Component {
    render() {
        return (
          <article id="dances">
              <DanceHeader />
              <DiscYellow />
              <DiscBlue />
              <DiscRed />
          </article>
        );
    }
}

export default Dance;
