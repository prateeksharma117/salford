import { Companies, Contact, GetStarted,Hero, Residencies, Value } from '../component'

const website = () => {
  return (
    <>
      <div className="App">
        <div className="background">
          <div className="white_gradient" />
          <Hero />
        </div>
        <Companies />
        <Residencies/>
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </>
  );
};

export default website;
