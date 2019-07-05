import React, {Component} from 'react';
import './itemPage.css';
import Header from '../appHeader';
import LogoB from '../appFooter/Beans_logo_dark.svg';

export default class ItemPage extends Component {
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
        <div class="container">
            <div class="row">
                <div class="col-lg-5 offset-1">
                    <img class="shop__girl" src="img/coffee_item.jpg" alt="coffee_item"></img>
                </div>
                <div class="col-lg-4">
                    <div class="title">About it</div>
                    <img class="beanslogo" src={LogoB} alt="Beans logo"></img>
                    <div class="shop__point">
                        <span>Country:</span>
                        Brazil
                    </div>
                    <div class="shop__point">
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div class="shop__point">
                        <span>Price:</span>
                        <span class="shop__point-price">16.99$</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </>
    )
  }
}