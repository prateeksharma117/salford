import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.scss";
import data from "../../utils/accordion";


const Value = () => {
  return (
    <>
      <section className="value_wrapper">
        <div className="paddings innerWidth flexCenter v_container">
          {/* left side */}
          <div className="v_left">
            <div className="image_container">
              <img
                src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          {/* right side */}
          <div className="flexColStart v_right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value we give to you</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br />
              We believe a good balance to live can make your life better.
            </span>

            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, index) => {
                return (
                  <AccordionItem
                    className={`accordionItem`}
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading className="flexCenter accordionHeading">
                      <AccordionItemButton className="accordionButton">
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
