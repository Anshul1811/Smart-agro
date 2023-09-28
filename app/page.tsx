import Image from "next/image";
import root from "../app/constants/images/root.jpg";

const Home = () => {
  return (
    <>
      <div className="w-100px h-100px">
        <Image src={root} alt="landscape image" className="w-100px h-100px" />
      </div>

      <div>root</div>
    </>
  );
};

export default Home;
