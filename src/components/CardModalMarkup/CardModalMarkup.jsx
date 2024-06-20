import { LiWrapper } from './CardModalMarkup.styled';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import avatar from '../../images/avatar.jpg';
import { FormReception } from '../FormReception/FormReception';

export const CardModalMarkup = ({ cardData, onClose }) => {
  const { id, name } = cardData;

  const [defaultAvatar, setDefaultAvatar] = useState(null);

  useEffect(() => {
    const generateDefaultAvatar = name => {
      if (name && name.length >= 2) {
        const initials = name
          .split(' ')
          .map(part => part.charAt(0))
          .join('')
          .toUpperCase();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        ctx.fillStyle = '#3470ff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, canvas.width / 2, canvas.height / 2);
        return canvas.toDataURL();
      }
      return null;
    };

    const defaultAvatarUrl = generateDefaultAvatar(name);
    setDefaultAvatar(defaultAvatarUrl);
  }, [name]);

  return (
    <LiWrapper key={id} className="item">
      <button type="button" className="buttonIcon" onClick={onClose}>
        <IoCloseOutline size="32" />
      </button>
      <h1 className="titleReception">
        Make an appointment with a psychologists
      </h1>
      <p className="textReception">
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className="containerAvatar">
        <div
          className="backgroundDiv"
          style={{ backgroundImage: `url(${avatar || defaultAvatar})` }}
        ></div>
        <div className="containerName">
          <p className="textYour">Your psychologists</p>
          <p className="textName">{name}</p>
        </div>
      </div>
      <FormReception />
    </LiWrapper>
  );
};
