import React, {Component} from 'react';
import Cta from './Cta';
import BonusGifts from './BonusGifts';
import Tools from './Tools';
import Dance from './Dance';


class WhatYouGet extends Component {
    render() {
        return (
        	<section id="what-you-get">
        		<Dance />
        		<BonusGifts />
        		<Tools />
                <Cta />
            </section>
        );
    }
}

export default WhatYouGet;
