import defaultImg from '../../images/psychologist.jpg';
import { Wrapper } from './Placeholder.styled';

const Placeholder = () => {
  return (
    <Wrapper>
      <div className="containerImg ">
        <img className="defaultImg" src={defaultImg} alt="placeholder" />
      </div>
    </Wrapper>
  );
};

export default Placeholder;
