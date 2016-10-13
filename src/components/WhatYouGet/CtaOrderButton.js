import React, {Component} from 'react';


class CtaOrderButton extends Component {
    render() {
        return (
                <a href="/product/code/CZ.do?actionkey=ADDTOBASKET" data-loglink="buy:2"><img src="http://img1.beachbodyimages.com/beachbody/image/upload/bbweb/cize/cize-cta-large.png" alt="Order Now" /></a>        
        );
    }
}

export default CtaOrderButton;
