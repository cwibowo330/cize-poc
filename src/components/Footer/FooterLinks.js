import React, {Component} from 'react';

class FooterLinks extends Component {
    render() {
        return (
                <div className="global-info">
                    <nav className="footer-nav">
                        <div className="footer-col">
                            <a href="https://www.beachbody.com">Home</a>
                            <a href="/product/about_us/company_overview.do">About Us</a>
                            <a href="/product/about_us/press.do">Press</a>
                            <a href="/category/newsletters.do">Newsletters</a>
                            <a href="https://teambeachbody.com/connect/message-boards">Message Boards</a>
                        </div>
                        <div className="footer-col">
                            <a href="https://faq.beachbody.com/app/home/lob/beach">Customer Service</a>
                            <a href="https://faq.beachbody.com/app/chat/chat_launch/lob/beach">Live Chat</a>
                            <a href="https://faq.beachbody.com/app/home/lob/beach">Contact Us</a>
                            <a href="/product/about_us/site_map.do">Site Map</a>
                        </div>
                        <div className="footer-col last">
                            <a href="/basket.do?nav=%2Fcategory%2Fid%2F4%2F106454">Shopping Cart</a>
                            <a href="/product/about_us/terms_of_use.do">Terms of Use</a>
                            <a href="/product/about_us/privacy_policy.do">Privacy Policy</a>
                        </div>
                    </nav>
                    <p className="legal">
                        &#169; 2015 Beachbody, LLC. All rights reserved. Beachbody, LLC is the owner of the CIZE, The End of Exercize, Beachbody, and Team Beachbody trademarks, and all related designs, trademarks, copyrights, and other intellectual property.
                    </p>
                </div>

        );
    }
}

export default FooterLinks;
