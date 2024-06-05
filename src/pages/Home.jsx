// src/Home.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'
import { Product } from "./shop/pruduct";
import { PRODUCTS } from "../products1";

const Home = () => {
  return (
    <div className="offcanvas-wrapper">
        <div className="owl-carousel large-controls dots-inside">
          <div className="item" >
            <div className="container padding-top-3x">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                  <div className="padding-top-3x">
                    <h2 className="text-white text-shadow">
                      Votre <span className='text-uppercase'>boutique </span> en ligne des montres de luxe en Algérie
                    </h2>
                    <a className="btn btn-primary btn-rounded btn-noborder btn-lg" href="/shop">Tous</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item" >
            <div className="container padding-top-3x">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                  <div className="padding-top-3x">
                    <h2 className="text-white text-shadow">
                      Une large gamme de montres de luxe<span className='text-uppercase'></span>
                    </h2>
                    <a className="btn btn-primary btn-rounded btn-noborder btn-lg" href="/shop">Top modèles</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
            {PRODUCTS.slice(0, 3).map((product, index) => (
               <div className="product" key={index}>
            <Product data={product} />
    </div>
  ))}
</div>
      </div>
  );
};

export default Home;
