import React, { useState } from "react";
import PageHeader from "../../components/pageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../assets/ImageOne.jpg";
import ImageTwo from "../../assets/ImageTwo.jpg";
import ImageThree from "../../assets/ImageThree.jpg";
import ImageFour from "../../assets/ImageFour.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "E-Commerce",
    image: ImageOne,
    link: "https://github.com/SureshReddy-Peram/react-basic-app/tree/react-basics/src",
  },
  {
    id: 3,
    name: "Notes",
    image: ImageTwo,
    link: "https://github.com/SureshReddy-Peram/react-basic-app/tree/react-basics/src",
  },
  {
    id: 2,
    name: "Movies",
    image: ImageThree,
    link: "https://github.com/SureshReddy-Peram/movies-app",
  },
  {
    id: 3,
    name: "Calculator",
    image: ImageFour,
    link: "https://github.com/SureshReddy-Peram/react-basic-app/tree/react-basics/src",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  console.log("===================");
  console.log(filteredValue);
  console.log("===================");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  //console.log(filteredItems);
  //console.log(filteredItems.length);

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  console.log(hoveredValue);

  return (
    <>
      <section id="portfolio" className="portfolio">
        <PageHeader
          headerText="My Portfolio"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link}>
                    {" "}
                    <img src={item.image} alt="pics" />
                  </a>
                </div>
                <div className="overlay">
                    {
                        index === hoveredValue && (
                            <div>
                              <p>{item.name}</p>
                              <button type="button"> <a href={item.link}>Visit</a></button>
                            </div>
                        )
                    }
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
