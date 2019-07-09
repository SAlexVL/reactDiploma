import React, {Component} from 'react';
import './itemPage.css';
import Header from '../appHeader';
import ErrorMessage from '../errorMessage';
import LogoB from '../appFooter/Beans_logo_dark.svg';

export default class ItemPage extends Component {

  render() {

    const arr = this.props.location.state;

    if (arr !== null && arr !== undefined) {
      return(
        <> 
        <div className="banner">
        <div className="container">
         <Header />
          <h1 className="title-big">{arr.name}</h1>
        </div>
      </div>
        <section className="shop">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={arr.url} alt="coffee_item"></img>
                </div>
                <div className="col-lg-4">
                    <div className="title">About it</div>
                    <img className="beanslogo" src={LogoB} alt="Beans logo"></img>
                    <div className="shop__point">
                        <span>Country:&nbsp;&nbsp;</span>
                        {arr.country}
                    </div>
                    <div className="shop__point">
                        <span>Description:&nbsp;&nbsp;</span>
                        {arr.description}
                    </div>
                    <div className="shop__point">
                        <span>Price:&nbsp;&nbsp;</span>
                        <span className="shop__point-price">{arr.price}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </>
    )
    } else {
      return <ErrorMessage />
    }


  }
}