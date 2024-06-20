import { Link } from 'react-router-dom';
import { Wrapper } from './HomeSection.styled';
import { MdArrowOutward } from 'react-icons/md';
import psychologist from '../../images/psychologist.jpg';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { MdOutlinePeopleOutline } from 'react-icons/md';

export const HomeSection = () => {
  return (
    <Wrapper>
      <div className="containerText">
        <h1 className="heroTitle">
          The road to the <span className="depths">depths</span> of the human
          soul
        </h1>
        <p className="heroText">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Link
          to="/psychologists"
          className="heroButton"
          style={{ textDecoration: 'none' }}
        >
          Get started
          <MdArrowOutward
            style={{
              strokeWidth: '2px',
              stroke: 'transparent',
              width: '15px',
              height: '17px',
              verticalAlign: 'middle',
              marginLeft: '18px',
              border: 'none',
            }}
          />
        </Link>
      </div>
      <div className="containerImg">
        <img
          className="psychologistImg"
          src={psychologist}
          alt="psychologist"
        />
        <div className="containerCheck">
          <div className="containerFaCheck">
            <FaCheck
              style={{
                width: '20px',
                height: '16px',
                fill: '#3470ff',
              }}
            />
          </div>
          <div>
            <p className="textCheck">Experienced psychologists</p>
            <p className="textNumber">15,000</p>
          </div>
        </div>
        <div className="containerQuestionMark">
          <MdOutlineQuestionMark
            style={{
              fill: '#fbfbfb',
            }}
          />
        </div>
        <div className="containerPeople">
          <MdOutlinePeopleOutline
            style={{
              fill: '#fbfbfb',
            }}
          />
        </div>
      </div>
    </Wrapper>
  );
};
