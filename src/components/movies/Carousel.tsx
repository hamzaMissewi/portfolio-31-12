import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "./config";
import "@/components/movies/Carousel.css";
import Image from "next/image";
import { TMDB_API_KEY } from "../../lib/getMovies";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

interface IGallery {
  id: number;
  media_type: string;
}

const Gallery = ({ id, media_type }: IGallery) => {
  const [credits, setCredits] = useState([]);

  const items = credits.map(
    (c: { profile_path?: string; name?: string }, index) => (
      <div className="carouselItem" key={index}>
        <Image
          width={100}
          height={100}
          src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
          alt={c?.name || ""}
          onDragStart={handleDragStart}
          className="carouselItem__img"
        />
        <b className="carouselItem__txt">{c?.name}</b>
      </div>
    ),
  );

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${TMDB_API_KEY}&language=en-US`,
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;
