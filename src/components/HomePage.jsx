import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full font-serif leading-[1.6] text-white bg-[url(/src/assets/Tracker-image.jpg)] bg-cover bg-no-repeat bg-black/80 bg-blend-multiply">
      <header>
        <nav className="flex justify-between py-5 px-8">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logo(1).png"
              alt="fitness-logo"
              className="w-[40px] h-[40px]"
            />
            <p>TrackFit</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/Signup")}
            className="bg-[#C26464] px-5 py-1.5 rounded-3xl"
          >
            Signup
          </button>
        </nav>
      </header>
      <main>
        <section className="text-center mt-[10rem]">
          <h1 className="text-5xl">Track Your Fitness. Transform Your Life.</h1>
          <button
            type="submit"
            onClick={() => navigate("/Login")}
            className="bg-[#B6282A] px-6 py-2.5 mt-6 rounded-3xl"
          >
            Login to Get Started
          </button>
        </section>
      </main>
      <hr className="mt-[16rem]" />
      <footer>
        <p className="italic text-center mt-[0.8rem]">© 2025 TrackFit</p>
      </footer>
    </div>
  );
}

export default HomePage;
