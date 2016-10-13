import React, {Component} from 'react';
import BonusGiftsTitle from './BonusGiftsTitle';
import BonusGiftsImages from './BonusGiftsImages';
import BonusGiftsBullets from './BonusGiftsBullets';



class BonusGifts extends Component {
    render() {
        return (

                <article id="bonus-gifts">
                    <div className="container">
                      <div className="wrap">
                        <BonusGiftsTitle />
                          <BonusGiftsImages />
                          <BonusGiftsBullets />
                      </div>
                    </div>
                </article>
        );
    }
}

export default BonusGifts;
