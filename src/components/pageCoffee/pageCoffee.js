import React, {Component} from 'react';
import Header from '../appHeader';
import './pageCoffee.css';
import CoffeeGirl from './coffee_girl.jpg';
import LogoB from '../appFooter/Beans_logo_dark.svg';

export default class CoffeePage extends Component {

  render() {

        return(
      <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Header />
            </div>
          </div>
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>

      <section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={CoffeeGirl} alt="girl"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <img className="beanslogo" src={LogoB} alt="Beans logo"/>
                    <div className="shop__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                        so questions. <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                        is song that held help face.
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"/>
                    </form>
                </div>
                <div className="col-lg-4">
                  <div class="shop__filter">
                            <div class="shop__filter-label">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn">Brazil</button>
                                <button class="shop__filter-btn">Kenya</button>
                                <button class="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                      <div class="shop__item">
                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                          <div class="shop__item-title">
                              Solimo Coffee Beans 2kg
                          </div>
                          <div class="shop__item-country">Brazil</div>
                          <div class="shop__item-price">10.73$</div>
                      </div>  
                      <div class="shop__item">
                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                        <div class="shop__item-title">
                            Presto Coffee Beans 1kg
                        </div>
                        <div class="shop__item-country">Brazil</div>
                        <div class="shop__item-price">15.99$</div>
                      </div> 
                      <div class="shop__item">
                        <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"></img>
                        <div class="shop__item-title">
                            AROMISTICO Coffee 1kg
                        </div>
                        <div class="shop__item-country">Brazil</div>
                        <div class="shop__item-price">6.99$</div>
                      </div>
                      <div class="shop__item">
                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                        <div class="shop__item-title">
                          Solimo Coffee Beans 2kg
                        </div>
                        <div class="shop__item-country">Brazil</div>
                        <div class="shop__item-price">10.73$</div>
                      </div>
                      <div class="shop__item">
                        <img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" alt="coffee"></img>
                        <div class="shop__item-title">
                          Solimo Coffee Beans 2kg
                        </div>
                        <div class="shop__item-country">Brazil</div>
                        <div class="shop__item-price">10.73$</div>
                      </div>
                      <div class="shop__item">
                        <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"></img>
                        <div class="shop__item-title">
                          Solimo Coffee Beans 2kg
                        </div>
                        <div class="shop__item-country">Brazil</div>
                        <div class="shop__item-price">10.73$</div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
  }
}