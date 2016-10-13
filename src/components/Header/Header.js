import React, {Component} from 'react';


class Header extends Component {
    render() {
        return (
            <header id="headerBB" role="banner">
            	<nav className="mainNavigationWrapper" role="presentation">
                    <div className="mainNavigation">
                        <a href="/" className="logo" title="Beachbody®" onclick="logLink('global:logo:home');">
                            <img src="https://www.beachbody.com/images/beachbody/en_us/global/bbv6/bb_logo_circle_45x43_white.png" title="Beachbody" alt="" />
                            Beachbody<sup>®</sup>
                        </a>
                        <span className="phoneSection phone-copy">To order call <strong className="prdPhone"><a href="tel:1 (800) 745-5893">1 (800) 745-5893</a></strong></span>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
