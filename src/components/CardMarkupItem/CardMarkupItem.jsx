import { Notify } from "notiflix";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { LiWrapper } from "./CardMarkupItem.styled";
import { useEffect, useState } from "react";
import { Modal } from "components/Modal/Modal";
import { CardModalList } from 'components/CardModalList/CardModalList';
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selects";
import { addFavorite, removeFavorite } from "../../redux/favorites/reducer";
import { PiStarFill } from "react-icons/pi";
import { IoEllipse } from "react-icons/io5";
import { selectUserIsSignIn } from "../../redux/users/selects";

export const CardMarkupItem = ({ cardData }) => {
  const {
    id,
    avatar_url,
    name,
    specialization,
    license,
    price_per_hour,
    rating,
    reviews,
    experience,
    initial_consultation,
    about,
  } = cardData;
  const dispatch = useDispatch();
  const isLogged = useSelector(selectUserIsSignIn);
  const favorites = useSelector(selectFavorites);
  // const selectedLevel = useSelector(selectFilteredLevel);
  const [isFavorite, setIsFavorite] = useState(false);
  const [defaultAvatar, setDefaultAvatar] = useState(null);
  const [defaultAvatarReviews, setDefaultAvatarReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [iconColorEmpty, setIconColorEmpty] = useState("#333");
  const [iconColorFilled, setIconColorFilled] = useState("red");

  useEffect(() => {
    const generateDefaultAvatar = (name) => {
      if (name && name.length >= 1) {
        const initial = name.charAt(0).toUpperCase();
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 100;
        canvas.height = 100;
        ctx.fillStyle = "rgba(52, 112, 255, 0.2)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#3470ff";
        ctx.font = "500 48px Inter";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(initial, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL();
      }
      return null;
    };

    const defaultAvatarUrl = generateDefaultAvatar(name);
    const defaultReviewerAvatars = reviews.map((review) =>
      generateDefaultAvatar(review.reviewer)
    );
    setDefaultAvatar(defaultAvatarUrl);
    setDefaultAvatarReviews(defaultReviewerAvatars);
  }, [name, reviews]);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.id === id));
  }, [favorites, id]);

  useEffect(() => {
    if (isFavorite) {
      setIconColorFilled("red");
    } else {
      setIconColorEmpty("#333");
      setIconColorFilled("red");
    }
  }, [isFavorite]);

  const handleButtonIcon = () => {
    if (isLogged) {
      if (isFavorite) {
        dispatch(removeFavorite(id));
        setIsFavorite(false);
      } else {
        dispatch(addFavorite(cardData));
        setIsFavorite(true);
      }
    } else {
      Notify.failure("To add to favorites, please log in to your account!");
    }
  };

  const handleButtonReviews = () => {
    setShowReviews(true);
  };

  const openButtonModal = () => {
    setIsModalOpen(true);
  };

  const closeButtonModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LiWrapper key={id} className="item">
      <button type="button" className="buttonIcon" onClick={handleButtonIcon}>
        {isLogged ? (
          isFavorite ? (
            <IoMdHeart
              color={iconColorFilled}
              style={{
                width: "26px",
                height: "22px",
                strokeWidth: "2px",
                stroke: "#191a15",
              }}
            />
          ) : (
            <IoMdHeartEmpty
              color={iconColorEmpty}
              style={{
                width: "26px",
                height: "22px",
                strokeWidth: "2px",
                stroke: "#191a15",
              }}
            />
          )
        ) : (
          <IoMdHeartEmpty
            color={iconColorEmpty}
            style={{
              width: "26px",
              height: "22px",
              strokeWidth: "2px",
              stroke: "#191a15",
            }}
          />
        )}
      </button>
      {isModalOpen && (
        <Modal onClose={closeButtonModal}>
          <CardModalList cardData={cardData} onClose={closeButtonModal} />
        </Modal>
      )}
      <div className="avatar">
        <img
          className="avatarUrl"
          src={avatar_url || defaultAvatar}
          alt="avatar"
          style={{ cursor: "pointer" }}
        />
        <span className="avatarEllipseOutline">
          <IoEllipse size="14" style={{ color: "#fff" }} />
        </span>
        <span className="avatarEllipse">
          <IoEllipse size="10" style={{ color: "#38cd3e" }} />
        </span>
      </div>
      <div className="containerInfo">
        <ul className="listInfo">
          <li className="itemInfo">Psychologist</li>
          <li className="itemInfo">
            <span className="starIcon">
              <PiStarFill style={{ color: "#ffc531" }} />
            </span>
            Rating:
            {rating}
          </li>
          <li className="itemInfo">
            Price / 1 hour:
            <span className="price">{price_per_hour + `$`}</span>
          </li>
        </ul>
        <h2 className="titleName">{name}</h2>
        <ul className="listExperience">
          <li className="itemExperience">
            <button className="buttonExperience" type="button">
              Experience: <span className="experience">{experience}</span>
            </button>
          </li>
          <li className="itemExperiences">
            <button className="buttonExperience" type="button">
              License: <span className="experience">{license}</span>
            </button>
          </li>
          <li className="itemExperience">
            <button className="buttonExperience" type="button">
              Specialization:{" "}
              <span className="experience">{specialization}</span>
            </button>
          </li>
          <li className="itemExperience">
            <button className="buttonExperience" type="button">
              Initial_consultation:
              <span className="experience">{initial_consultation}</span>
            </button>
          </li>
        </ul>
        <p className="aboutText" style={{ marginBottom: showReviews ? "40px" : "14px" }}>{about}</p>
        <button
          type="button"
          className="buttonReadMore"
          onClick={handleButtonReviews}
          style={{ display: showReviews ? "none" : "block" }}
        >
          Read more
        </button>
        {showReviews && (
          <>
            <ul className="listReviews">
              <li className="itemReviews">
                <div className="containerReviews">
                  <img
                    className="avatarReviews"
                    src={defaultAvatarReviews[0]}
                    alt="avatar"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="containerRating">
                    <p className="textReniewerName">{reviews[0].reviewer}</p>
                    <p className="textReniewerRating">
                      <span className="starIcon">
                        <PiStarFill style={{ color: "#ffc531" }} />
                      </span>
                      {reviews[0].rating}
                    </p>
                  </div>
                </div>
                <p className="textReviews">{reviews[0].comment}</p>
              </li>
              <li className="itemReviews">
                <div className="containerReviews">
                  <img
                    className="avatarReviews"
                    src={defaultAvatarReviews[1]}
                    alt="avatar"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="containerRating">
                    <p className="textReniewerName">{reviews[1].reviewer}</p>
                    <p className="textReniewerRating">
                      <span className="starIcon">
                        <PiStarFill style={{ color: "#ffc531" }} />
                      </span>
                      {reviews[1].rating}
                    </p>
                  </div>
                </div>
                <p className="textReviews">{reviews[1].comment}</p>
              </li>
            </ul>
            <button
              type="button"
              className="buttonReception"
              onClick={openButtonModal}
            >
              Make an appointment
            </button>
          </>
        )}
      </div>
    </LiWrapper>
  );
};
