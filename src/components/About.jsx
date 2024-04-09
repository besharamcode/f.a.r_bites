import React from "react";
import hijabiImg from "../assets/hijabi-cafe.jpeg";

const About = () => {
  return (
    <div id="about" className="min-h-[100vh] body-padding pt-1 hide-scrollbar">
      <section className=" md:mt-24 mt-20">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          About Us
        </h2>
        <div className="flex justify-evenly items-center flex-col md:flex-row h-full mt-20">
          <div>
            <img
              className="w-[60%] mx-auto mix-blend-multiply bg-prm rounded-full p-2 overflow-hidden"
              src={hijabiImg}
              alt=""
            />
          </div>
          <div className="w-fit">
            <h3 className="text-[1.5rem] mt-7 md:text-[2.5rem] font-[Outfit-Medium]">
              Assalamualaikum, We are F.A.R Bites
            </h3>
            <p className="tracking-wide font-[Outfit-Light]">
              Enter a realm of temptation with our irresistible brownies.
              Satisfy your cravings with each decadent bite. Indulge now and
              experience pure delight! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nihil hic obcaecati corporis sit quibusdam
              dolores maiores reiciendis saepe numquam! Pariatur, cum illo modi
              voluptatibus dolore molestiae incidunt id quibusdam neque ullam a
              laborum tenetur! Vero, unde ea, delectus sit expedita aut tempora
              suscipit amet dolorum eaque corporis rem dicta eum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
