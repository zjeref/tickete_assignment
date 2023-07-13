import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Navbaar from "./components/Navbaar";
import Help from "./components/Help";
import Services from "./components/Services";
import TicketOverview from "./components/TicketOverview";
import Venue from "./components/Venue";
import CardInfo from "./components/forms/CardInfo";
import Details from "./components/forms/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="px-6 md:px10">
          <Navbaar />
          <div className="mb-[64px] not-sr-only md:sr-only">
            <Header />
          </div>
          <div className="w-full max-w-5xl flex flex-col-reverse items-center  md:flex-row border-b-[1px]">
            <div className="w-full max-w-3xl mb-5 md:pr-6 md:border-r-[1px] border-greyscale space-y-11">
              <div className="mb-[64px] sr-only md:not-sr-only">
                <Header />
              </div>
              <Details />
              <CardInfo />
            </div>
            <div className="w-full flex flex-col items-center max-w-2xl md:pl-6  border-greyscale mb-10 space-y-10">
              <Venue />
              <TicketOverview />
            </div>
          </div>
          <div className="w-full max-w-5xl md:pr-6  flex flex-col md:flex-row md:justify-between">
            <div className="w-full max-w-3xl md:pr-6 space-y-10 ">
              <FAQ />
            </div>
            <div className="w-full max-w-2xl md:pl-6  border-greyscale my-10 space-y-10">
              <Help />
            </div>
          </div>
          <div className="w-full max-w-5xl flex  border-t-[1px]">
            <Services />
          </div>
        </div>
      </div>
      <div className="flex justify-center  bg-blackk">
        <Footer />
      </div>
    </>
  );
}

export default App;
