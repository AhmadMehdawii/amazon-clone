import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123456789"
            title="Back to School Supply Box Grades K-5"
            price={20}
            image="https://m.media-amazon.com/images/I/91+-5vJm7jL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="321654987"
            title="Four Candies 0.5mm Mechanical Pencil Set with Case"
            price={15}
            image="https://m.media-amazon.com/images/I/712suGlsGDL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="741852963"
            title="Nicpro 39 PCS Aesthetic School Supplies"
            price={32}
            image="https://m.media-amazon.com/images/I/71f3K1OxaPL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="951742638"
            title="Four Candies Cute Mechanical Pencil Set"
            price={14}
            image="https://m.media-amazon.com/images/I/71yim77YZpL._AC_UL400_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="111111111"
            title="Sticky Notes 3x3 inch"
            price={16}
            image="https://m.media-amazon.com/images/I/61egW3reBkL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="222222222"
            title="Early Buy 6 Pads Lined Sticky Notes"
            price={8}
            image="https://m.media-amazon.com/images/I/71Znub6S4VS._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="333333333"
            title="AILIHEN Kids Headphones 5 Pack Bulk for K-12 School Classroom"
            price={190}
            image="https://m.media-amazon.com/images/I/71zYRbzdagL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="444444444"
            title="Mead Spiral Notebook, Pack of 18"
            price={240}
            image="https://m.media-amazon.com/images/I/81lgA28eknL._AC_UL400_.jpg"
            rating={5}
          />
          <Product
            id="555555555"
            title="iBayam Journal Planner Pens Colored Pens Fine Point Markers"
            price={16}
            image="https://m.media-amazon.com/images/I/61zwYT19njL._AC_UL400_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="111111111"
            title="SHARPIE S-Gel, Gel Pens, Medium Point (0.7mm)"
            price={65}
            image="https://m.media-amazon.com/images/I/81Q1Z2EHNUL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="222222222"
            title="Magnetic Pencil Holder"
            price={34}
            image="https://m.media-amazon.com/images/I/71pOL90xb8L._AC_UL400_.jpg"
            rating={3}
          />
          <Product
            id="333333333"
            title="Letter Tray, Clear Acrylic Paper Tray, School Teacher Office Supplies Organization"
            price={99}
            image="https://m.media-amazon.com/images/I/71RNUHDWegL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="444444444"
            title="Dunwell 5-Subject Notebook College Ruled"
            price={55}
            image="https://m.media-amazon.com/images/I/71hbzet63EL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="555555555"
            title="LABUK 12pcs Pastel Highlighters Aesthetic Cute Bible Highlighters and Pens No Bleed"
            price={15}
            image="https://m.media-amazon.com/images/I/615NY4t0lwL._AC_UL400_.jpg"
            rating={4}
          />
          <Product
            id="666666666"
            title="Scissors, iBayam 8inch Multipurpose Scissors Bulk 3-Pack"
            price={34}
            image="https://m.media-amazon.com/images/I/61eT3wcT+KL._AC_UL400_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
