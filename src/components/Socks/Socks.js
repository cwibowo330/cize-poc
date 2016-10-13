import React, {Component} from 'react';
import SocksImage from './SocksImage';
import SocksWrap from './SocksWrap';

class Socks extends Component {
    render() {
        return (
        	<section id="socks">
                <div className="container">
                  <SocksImage />
                  <SocksWrap />
                </div>
            </section>
        );
    }
}

export default Socks;
