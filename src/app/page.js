import Cat from './components/Cat';
import IntroToken from './components/IntroToken';
import WhySection from './components/WhySection';
import Join from './components/Join';
import Appbar from './components/Appbar';

export default function Home() {
  return (
    <>
      <Cat />
      <IntroToken />
      <WhySection />
      <Join />
      <Appbar/>
    </>
  );
}
