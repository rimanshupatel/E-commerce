import Homepage from "./pages/Homepage/Homepage";
import MainProductList from "./users/components/MainProduct/MainProductList";
import Navigation from "./users/components/Navigation/Navigation";
import Footer from "./users/components/footer/Footer";
function App() {
  return (
    <>
      <Navigation />
      {/* <Homepage /> */}
      <MainProductList />
      <Footer />
    </>
  );
}

export default App;
