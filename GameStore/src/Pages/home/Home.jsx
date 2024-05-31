import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/layout/Layout";
import HeaderCarousel from "../../Components/carousel/HeaderCarousel";
import SearchBar from "../../Components/searchbar/SearchBar";
import EcommerceCard from "../../Components/ecommerceCard/EcommerceCard";
import { collection, getDocs, query, getFirestore } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { Carousel } from "antd";

const Slides = [
  "https://c4.wallpaperflare.com/wallpaper/656/869/201/call-of-duty-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/31/304/23/minecraft-video-games-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/338/209/238/girl-guitar-game-face-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/203/377/203/call-of-duty-ww2-8k-tokyo-game-show-2017-poster-wallpaper-preview.jpg",
];

function Home() {
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [freeGames, setFreeGames] = useState([]);
  const [featuredGames, setFeaturedGames] = useState([]);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Gamesdata = [];
        const q = query(collection(db, "Games"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const dataObject = {
            id: docData.id,
            GameTitle: docData.GameTitle,
            GameDescription: docData.GameDescription,
            GamePrice: docData.GamePrice,
            GameImages: docData.GameImages,
            GameType: docData.GameType,
          };
          Gamesdata.push(dataObject);
        });
        const recommended = Gamesdata.filter(
          (game) => game.GameType === "Recommended Games"
        );
        const free = Gamesdata.filter((game) => game.GameType === "Free Games");
        const featured = Gamesdata.filter((game) => game.GameType === "Featured Games");

        console.log(recommended)
    
        setRecommendedGames(recommended);
        setFreeGames(free);
        setFeaturedGames(featured);
    
        setGameData(Gamesdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    fetchData();
  }, []);

  return (
    <Layout>
      <SearchBar />
      <div>
        <h1 className="font-roboto text-6xl px-52 pt-6 font-bold text-white">
          Store
        </h1>
      </div>
      <div className=" ">
        <HeaderCarousel mediaItems={Slides} />
      </div>

      <div>
        <h1 className="font-roboto text-4xl px-56 pt-16 pb-8 font-bold text-white">
          Recommended Games
        </h1>
        <Carousel slidesToShow={4} slidesToScroll={4} className="w-full px-56 h-[550px]">
          { recommendedGames.map((game1, index) => (
              <EcommerceCard
                name={game1.GameTitle}
                price={game1.GamePrice}
                description={game1.GameDescription}
                image={game1.GameImages}
              />
            ))}
        </Carousel>
      </div>

      <div>
        <h1 className="font-roboto text-4xl px-56 pt-20 pb-8 font-bold text-white">
          Featured Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-56">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>

      <div>
        <h1 className="font-roboto text-4xl px-56 pt-20 pb-8 font-bold text-white">
          Popular Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-56">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>

      <div>
        <h1 className="font-roboto text-4xl px-56 pt-20 pb-8 font-bold text-white">
          Free Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-56">
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
          <EcommerceCard />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
