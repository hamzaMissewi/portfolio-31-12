import React, { useEffect, useState } from "react";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "./config";
import "@/components/movies/ContentModal.css";
import { Backdrop, Box, Button, Fade, Modal, styled } from "@mui/material";
import Carousel from "./Carousel";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { TMDB_API_KEY } from "@/lib/getMovies";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Box)((theme: any) => {
  return {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.boxShadow,
    padding: theme.padding,
  };
});

interface IContentModal {
  id: number;
  media_type: string;
  children: React.ReactNode;
}

// TransitionsModal
export default function ContentModal({
  children,
  media_type,
  id,
}: IContentModal) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<{
    poster_path?: string;
    name?: string;
    title?: string;
    backdrop_path?: string;
    first_air_date?: string;
    release_date?: string;
    tagline?: string;
    overview?: string;
  }>({});
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`,
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop()}
        // BackdropProps={{
        //     timeout: 500,
        // }}
      >
        <Backdrop open={open}>
          <Fade in={open}>
            {content && (
              // <div className={classes.paper}>
              <StyledPaper>
                <div className="ContentModal">
                  <Image
                    width={100}
                    height={100}
                    src={
                      content.poster_path
                        ? `${img_500}/${content.poster_path}`
                        : unavailable
                    }
                    alt={content.name || content.title}
                    className="ContentModal__portrait"
                  />
                  <Image
                    width={100}
                    height={100}
                    src={
                      content.backdrop_path
                        ? `${img_500}/${content.backdrop_path}`
                        : unavailableLandscape
                    }
                    alt={content.name || content.title}
                    className="ContentModal__landscape"
                  />
                  <div className="ContentModal__about">
                    <span className="ContentModal__title">
                      {content.name || content.title} (
                      {(
                        content.first_air_date ||
                        content.release_date ||
                        "-----"
                      ).substring(0, 4)}
                      )
                    </span>
                    {content.tagline && (
                      <i className="tagline">{content.tagline}</i>
                    )}
                    <span className="ContentModal__description">
                      {content.overview}
                    </span>

                    <div>
                      <Carousel id={id} media_type={media_type} />
                    </div>

                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      color="secondary"
                      target="__blank"
                      href={`https://www.youtube.com/watch?v=${video}`}
                    >
                      Watch the Trailer
                    </Button>
                  </div>
                </div>
              </StyledPaper>
            )}
          </Fade>
        </Backdrop>
      </StyledModal>
    </>
  );
}
