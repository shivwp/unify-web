import Slider from './components/slider';
import Services from './components/services';
import FreelanceWorld from './components/freelace-world';
import Findfreelance from './components/find-freelance';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Slider nonavbg={true}/>
      <Services />
      <FreelanceWorld />
      <Findfreelance />
      <Footer />
    </>
  )
}

export default App;
