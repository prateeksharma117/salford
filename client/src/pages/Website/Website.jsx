import { Companies, Contact, GetStarted,Hero, Residencies, Value } from '../../component'

const Website = () => {
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

export default Website;
