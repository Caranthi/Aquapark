import React from "react";
import Header from "../organisms/Header";

import '../../styles/pages/Main.css';
import Footer from "../atoms/Footer";
const Main = () =>
{
    const adText = "Baseny i atrakcje wodne";
    const lodzText = "Łódź";
    const zgierzText = "Zgierz";
    const radomskoText = "Radomsko";
    const entryText = 'Witamy na stronie basenów GżdyPuciek – dowiedz się więcej o największych i najlepszych atrakcjach wodnych w kraju. Zebrane w tym miejscu informacje, pozwolą Ci zaplanować dzień, a nawet cały weekend nad wodą. Wybieraj spośród naszych lokalizacji, spędź czas nad basenem. Rozpocznij dzień nad wodą!';
    const bargainText = 'Tylko w najbliższą sobotę wszystkie dzieci do 10% taniej!';
    const lodzTitle = 'Łódź - Bajoro';
    const zgierzTitle = 'Zgierz - Kałuża';
    const radomskoTitle = 'Radomsko - Złote Jezioro';
    const lodzDescription = 'Najnowocześniejszy i jeden z największych basenów w Polsce, zlokalizowany w samym centrum miasta. Połączenie klasycznego basenu z centrum edukacyjnym i ogromną strefą SPA&Wellness . 17 wewnętrznych basenów, największe saunarium w Polsce i 11 zjeżdżalni o łącznej długości pół kilometra!';
    const zgierzDescription = 'Jeden z największych basenów woj. łódzkiego zlokalizowany 20 minut drogi od Łodzi w miejscowości Zgierz. Oferuje m.in zjeżdżalnie o długości 21 i 37 metrów, basen sportowy oraz basen ze sztuczną falą!';
    const radomskoDescription = 'Najnowocześniejszy i jeden z największych basenów w Polsce, zlokalizowany w samym centrum miasta. Połączenie klasycznego basenu z centrum edukacyjnym i ogromną strefą SPA&Wellness . 17 wewnętrznych basenów, największe saunarium w Polsce i 11 zjeżdżalni o łącznej długości pół kilometra!';

    return(
      <div className="Main">
          <div className="MainImage">
              <div className="scrolling-text-container">
                  <div className="scrolling-text">
                      {bargainText}
                  </div>
              </div>
              <Header/>
              <div className="Locations">
                  <p className="AdText">{adText}</p>
                  <div className="LocationList">
                      <p className="Location">{lodzText}</p>
                      <div className="Separator"/>
                      <p className="Location">{zgierzText}</p>
                      <div className="Separator"/>
                      <p className="Location">{radomskoText}</p>
                  </div>
              </div>
          </div>
          <p className="EntryText">{entryText}</p>
          <div className="Descriptions">
              <div className="DescriptionContainer">
                  <div className="DescriptionImage1"/>
                  <div className="tmp">
                      <p className="DescriptionTitle">{lodzTitle}</p>
                      <p className="Description">{lodzDescription}</p>
                  </div>
              </div>
              <div className="DescriptionContainer1">
                  <div className="tmp">
                      <p className="DescriptionTitle1">{zgierzTitle}</p>
                      <p className="Description1">{zgierzDescription}</p>
                  </div>
                  <div className="DescriptionImage2"/>
              </div>
              <div className="DescriptionContainer">
                  <div className="DescriptionImage3"/>
                  <div className="tmp">
                      <p className="DescriptionTitle">{radomskoTitle}</p>
                      <p className="Description">{radomskoDescription}</p>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
    );
}

export default Main;
