import React, {Component} from 'react';
import FooterReviews from './FooterReviews';
import FooterLogo from './FooterLogo';
import FooterDisclaimers from './FooterDisclaimers';
import FooterLinks from './FooterLinks';
class Footer extends Component {
    render() {
        return (
        	<section id="footer">
                <div className="footer-container">
                    <FooterReviews />
                    <FooterLogo />
                    <FooterDisclaimers />
                    <FooterLinks />
                </div>
            </section>


        );
    }
}

export default Footer;
