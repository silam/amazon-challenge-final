import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
            price={26.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Pro Angular 9: Build Powerful and Dynamic Web Apps 4th ed. Edition"
            price={54.38}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/418hZfmNkXL._SX348_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Pro C# 8 with .NET Core 3: Foundational Principles and Practices in Programming 9th ed. Edition"
            price={59.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41jCaSFIiEL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445930"
            title="AWS Certified Solutions Architect Official Study Guide: Associate Exam (Aws Certified Solutions Architect Official: Associate Exam)"
            price={31.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51d2BYZWvvL._SX396_BO1,204,203,200_.jpg"
          />
          <Product
            id="3254354345"
            title="Docker: Up & Running: Shipping Reliable Containers in Production 2nd Edition"
            price={27.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/510qnZZj0sL._SX379_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Building Serverless Microservices in Python: A complete guide to building, testing, and deploying microservices using serverless computing on AWS Paperback – March 29, 2019"
            price={29.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Z1Qvm0f0L._SX404_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
