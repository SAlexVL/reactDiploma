import React, {Component} from 'react';
import Header from '../appHeader';
import './pleasurePage.css';
import Pglass from './pleasure_glass.jpg';
import LogoB from '../appFooter/Beans_logo_dark.svg';
import ItemList from '../itemList';
import GetService from '../../services/getService';

export default class PleasurePage extends Component {

  service = new GetService();

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
                    <img className="Name" src={LogoB} alt="Beans logo"/>
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
                      <ItemList getData = {this.service.getGoods}																
																name = {'pleasurepage'}
											/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
  }
} 