import React, {Component} from 'react';

class Tools extends Component {
    render() {
        return (
                  <article id="tools">
                    <div className="container">
                      <div className="wrap">
                        <h3>4 FREE BONUSES</h3>
                        <hr id="hr-tools" aria-hidden="true" />
                          <div className="images">
                            <div id="guides"></div>
                            <div id="calendar"></div>
                          </div>
                          <ul className="bullets">
                              <li><h4>GET STARTED GUIDE</h4>
                              <span>Get started on the right foot for your best results and track your transformation in this step-by-step guide. 30 days goes fast, so you wont want to skip this step.</span></li>
                              <li><h4>EAT UP! MEAL PLAN</h4>
                              <span>To get that dancer's body as soon as possible, you'll need this secret weapon.
                              With the Eat Up! Meal Plan, losing weight is easy and delicious—and you're in control. 
                              
                              <p>We give you mouthwatering, easy-to-prepare recipes that help you lean out fast and give you energy to dance! And, for those times you want to incorporate your favorite foods (yes, even chocolate!), we show you the portions to eat to stay on track!</p>

                              <p>It's not about dieting, starvation, or deprivation. It's about healthy eating, simple portion control, and feeding your body what it needs to feel good. </p>
                              </span></li>
                              <li><h4>BEGINNER AND ADVANCED CALENDARS</h4>
                              <span>Use the Beginner Calendar when you want to go at your own pace. 
                              Or use the Advanced Calendar for a bit more structure, so you know which courses to do on which days to keep
                               progressing. After you finish a course, rate your dance skills "backup dancer," "front and center," or "ready for my music video" to
                                track your progress!
                              </span></li>
                              <li><h4>8 COUNT ABS WORKOUT</h4>
                              <span>Strong abs and core are key for every great dancer&ndash;and sexy body! 
                              Work you abs on the floor and then perform the ab sequence to HEADSPRUNG, originally recorded by LL Cool J.</span></li>
                          </ul>
                          <h4 className="plus24">PLUS 24/7 ONLINE SUPPORT<span>Get extra motivation and support from weight-loss experts and other CIZE customers.</span></h4>
                      </div>
                    </div>
                </article>
        );
    }
}

export default Tools;
