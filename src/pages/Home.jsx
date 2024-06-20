import { Section } from 'components/Section/Section';
import { HomeSection } from '../components/HomeSection/HomeSection';

function Home() {
  return (
    <Section className="homeSection" titleClassName="titleHome">
      <HomeSection />
    </Section>
  );
}

export default Home;
