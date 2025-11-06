import { NavLink } from "react-router-dom";
import NOTFOUNDIMAGE from "../Assets/Images/RouteNotFOundImage.png"

const PageNotFound = () => {
  return (
    <section className="h-[100vh] w-full bg-[#eee] flex justify-center flex-col items-center">
      <header className="flex justify-center flex-col items-center">
        <h1 className="text-5xl">Page not Found</h1>
        <h2 className="text-4xl font-[700]">404</h2>
      </header>

      <main>
        <picture>
            <img src={NOTFOUNDIMAGE} alt="" className="h-[350px]" />
        </picture>
      </main>

      <footer>
        <NavLink to={"/"} className={"bg-[#cf9019] text-white py-2 px-6 rounded-[10px] font-semibold"}>To Home</NavLink>
      </footer>
    </section>
  );
};

export default PageNotFound;
