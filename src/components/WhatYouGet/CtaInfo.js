import React, {Component} from 'react';

class CtaInfo extends Component {
    render() {
        return (

                <div className="cta-info">
                            <img className="bbb" src="http://img1.beachbodyimages.com/beachbody/image/upload/bbweb/common/bbb-vertical.png" alt="Image of the Better Business Bureau’s Accredited Business seal." />
                            <small>Just 3 monthly payments of $19.95 (+$12.95 s&amp;h) Or select a single payment option during checkout. <span>30-Day Money-Back Guarantee!</span> (less s&amp;h)</small>
                            <a href="#" className="popup" data-selector="popup-mbg"><img src="http://img1.beachbodyimages.com/beachbody/image/upload/common/30DAYMBG_LessS_H_English_Black_BG.svg" className="mbg" alt="100% Satisfaction 30-Day Money-back guarantee. Less shipping and handling. Select to open dialog." /></a>
                        </div>
        );
    }
}

export default CtaInfo;
