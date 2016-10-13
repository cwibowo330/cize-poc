import React, {Component} from 'react';
import CtaOrderButton from './CtaOrderButton';
import CtaInfo from './CtaInfo';

class Cta extends Component {
    render() {
        return (
                <article id="cta">
                    <div className="cta">
                        <CtaOrderButton />
                        <CtaInfo />
                    </div>
                </article>
        );
    }
}

export default Cta;
