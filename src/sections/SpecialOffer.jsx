import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capatalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your style and comfort
          with Nike. Discover the latest in footwear, apparel, and accessories,
          designed to keep you at the top of your game.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Whether you're hitting the gym, the track, or just the streets, Nike
          has everything you need to elevate your performance and look great
          doing it. n{" "}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            iconUrl={arrowRight}
            backGroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
