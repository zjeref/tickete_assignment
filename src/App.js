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
      <div className="flex justify-center">
        <div className="px-10 ">
          <Navbaar />
          <div className="mb-[64px] sr-only">
            <Header />
          </div>
          <div className="w-full max-w-5xl flex border-b-[1px]">
            <div className="w-full max-w-3xl pr-6 border-r-[1px] border-greyscale space-y-11">
              <div className="mb-[64px] not-sr-only">
                <Header />
              </div>
              <Details />
              <CardInfo /> {/* todo validations */}
            </div>
            <div className="w-full max-w-2xl pl-6  border-greyscale mb-10 space-y-10">
              <Venue />
              <TicketOverview />
            </div>
          </div>
          <div className="w-full max-w-5xl flex justify-between">
            <div className="w-full max-w-3xl pr-6 space-y-10 ">
              <FAQ />
            </div>
            <div className="w-full max-w-2xl pl-6  border-greyscale my-10 space-y-10">
              <Help />
            </div>
          </div>
          <div className="w-full max-w-5xl flex justify-between border-t-[1px]">
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
