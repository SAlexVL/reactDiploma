import React, {Component} from 'react';
import Header from '../appHeader';
import './pleasurePage.css';
import Pglass from './pleasure_glass.jpg';
import LogoB from '../appFooter/Beans_logo_dark.svg';

export default class PleasurePage extends Component {

  render() {

    return(
		<>
		<div className="pleasure">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
					  <Header />
					</div>
				</div>
				<h1 className="title-big">For your pleasure</h1>
			</div>
		</div>

      <section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 offset-2">
                    <img className="shop__girl" src={Pglass} alt="glass"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About our goods</div>
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
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
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