import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Ratings = () => {
  const userRatings = [
    {
      id: 1,
      name: "Mustafa",
      comment:
        "Brownies are Appetizing Thank you for such super luscious taste with quality ingredients 🤤🤎",
    },
    {
      id: 2,
      name: "Hamza",
      comment:
        "I recently had the pleasure of enjoying your chocolate brownie and was absolutely delighted with the experience. The rich chocolate flavor paired with the perfect texture made for an unforgettable treat. It's clear that a great deal of care and expertise goes into your baking. Thank you for creating such a wonderful product that stands out for its quality and taste. I look forward to indulging in more of your delightful offerings.",
    },
    {
      id: 3,
      name: "Zainab",
      comment:
        "It's just lips smacking , delightful, mouth watering bessstttttt browniee!!!!🫨🤌💗🥂",
    },
    {
      id: 4,
      name: "Summaiya",
      comment:
        "I just checked out your page and ordered one, and damnnn I haven't had one this tasty before! Anyways l9ved the package and the content in it . I loved the chocolaty flavour yummyyyyy 😍😍😍😋😋😋🟤🟤",
    },
    {
      id: 5,
      name: "Sonal",
      comment: "These were absolutely delicious! Would definitely recommend!",
    },
  ];
  return (
    <div
      id="ratings"
      className="min-h-[100vh] body-padding pt-1 hide-scrollbar"
    >
      <section className="h-full md:mt-24 mt-20 ">
        <h2 className="font-[Outfit-Semibold] text-center text-2xl font-bold text-prm border-b-2 border-b-prm">
          Happy Customers
        </h2>
        <div
          id="cards"
          className="ratings-cards flex justify-center flex-wrap sm:gap-16 gap-8 md:mt-20 mt-16 font-[Outfit-Medium]"
        >
          {userRatings.map((rating) => (
            <div
              key={rating.id}
              className="rating-card flex flex-col items-start w-[20rem] "
            >
              <div className="relative">
                <div className="name bg-prm text-white px-4 py-1 h-fit mb-4">
                  <p>{rating.name}</p>
                </div>
                <div className="arrow bg-prm absolute top-[2rem] right-0"></div>
              </div>
              <div className="comment">
                <p>{rating.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ratings;
