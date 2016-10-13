import React, {Component} from 'react';
import Header from './components/Header/Header';
import CizeLive from './components/CizeLive/CizeLive';
import Socks from './components/Socks/Socks';
import WhatYouGet from './components/WhatYouGet/WhatYouGet';
import Footer from './components/Footer/Footer';


class App extends Component {
    render() {
        return (
            <div className="my-app">
            	<Header />
                <WhatYouGet />
                <CizeLive />
                <Socks />
                <Footer />
            </div>
        );
    }
}

export default App;
