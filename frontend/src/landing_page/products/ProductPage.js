import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from'./RightSection'

function ProductPage() {
  return (
    <>
      <Hero />

      <LeftSection
        Imageurl="media/images/kite.png"
        heading="Kite"
        paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link=""
        googleplay=""
        appleplay=""
      />

      <RightSection  Imageurl="media/images/console.png"
        heading="Console"
        paragraph=" The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        linktopic="Learn more "/>

       <LeftSection
        Imageurl="media/images/coin.png"
        heading="Coine"
        paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link=""
        googleplay=""
        appleplay=""
      />

        <RightSection   Imageurl="media/images/kiteconnect.png"
        heading="Kite Connect API"
        paragraph="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        linktopic="Kite Connect "/>

         <LeftSection
        Imageurl="media/images/varsity.png"
        heading="Varsity mobilee"
        paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link=""
        googleplay=""
        appleplay=""
      />
    </>
  );
}

export default ProductPage;
