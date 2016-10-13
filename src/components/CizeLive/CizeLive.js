import React, {Component} from 'react';
import CizeLiveInfoWrap from './CizeLiveInfoWrap';

class CizeLive extends Component {
    render() {
        return (
        	<section id="cize-live">
              <div className="container">
                  <CizeLiveInfoWrap />
              </div>
            </section>
        );
    }
}

export default CizeLive;
