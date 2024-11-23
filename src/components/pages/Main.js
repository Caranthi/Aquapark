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
          <Footer/>
      </div>
    );
}

export default Main;
