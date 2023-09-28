import Blueberry from "../../constants/images/bluebrry.jpg";
import Strawberry from "../../constants/images/strawberry.jpg";
import Eggplant from "../../constants/images/eggplant.jpg";
import Cabbage from "../../constants/images/cabbage.jpg";
import Carrot from "../../constants/images/carrot.jpg";
import Apple from "../../constants/images/apple1.jpg";
import AboutMain from "../../constants/images/garden.jpg";

import Image from "next/image";

const About = () => {
  return (
    <>
      <div>
        <Image
          src={AboutMain}
          width={500}
          height={500}
          alt="Picture of crops"
        />

        <div>
          <h3>OUR INTRODUCTION</h3>
          <h1>Pure Agriculture and Organic Form</h1>
          <h2>We're Leader in Agriculture Market</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ducimus repudiandae a ex accusamus tenetur rerum, autem explicabo
            doloribus reiciendis nam doloremque. Vitae iusto, nisi illum sit
            reprehenderit tempora reiciendis!
          </p>
          <div>
            <h5>Organic food contains more vitamins</h5>
            <h5>Eat Organic because supply meets demand</h5>
            <h5>Organic food is never irradicated</h5>
          </div>
        </div>
      </div>

      <div>
        <h2>POPULAR FOOD AND VEGETABLES</h2>
        <h1>Quality Fruits & Vegetables</h1>
        <div>
          <Image src={Apple} width={500} height={500} alt="Picture of apple" />

          <Image
            src={Blueberry}
            width={500}
            height={500}
            alt="Picture of blueberry"
          />

          <Image
            src={Strawberry}
            width={500}
            height={500}
            alt="Picture of strawberry"
          />

          <Image
            src={Eggplant}
            width={500}
            height={500}
            alt="Picture of eggplant"
          />

          <Image
            src={Cabbage}
            width={500}
            height={500}
            alt="Picture of cabbage"
          />

          <Image
            src={Carrot}
            width={500}
            height={500}
            alt="Picture of carrot"
          />
        </div>
      </div>
    </>
  );
};

export default About;
