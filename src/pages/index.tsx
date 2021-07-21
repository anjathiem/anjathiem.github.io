import { Hero } from "../templates/hero";
import { Test2 } from "../templates/test2";

const Home: React.FC = () => {
  return (
    <>
      <Hero imagePath={"images/anja-thiem.webp"} />
      <Test2 headline={"Anjaaaaaaaaa"} />
    </>
  );
};

export default Home;
