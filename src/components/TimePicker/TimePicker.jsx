import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Mousewheel, Pagination } from 'swiper/modules';
import {
  Container,
  FixedHeader,
  Option,
  StyledSwiper,
} from './TimePicker.styled';

const TimePicker = ({ onSelect }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeSelect = time => {
    setSelectedTime(time);
    onSelect(time);
  };

  const generateTimeOptions = () => {
    const options = [];
    const startTime = 9;
    const endTime = 18;

    for (let hour = startTime; hour <= endTime; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const time = `${formattedHour}:${formattedMinute}`;
        const isSelected = selectedTime === time;

        options.push(
          <SwiperSlide key={time}>
            <Option
              selected={isSelected}
              onClick={() => handleTimeSelect(time)}
            >
              {formattedHour} : {formattedMinute}
            </Option>
          </SwiperSlide>
        );
      }
    }

    return options;
  };

  return (
    <Container>
      <FixedHeader>
        <span className="time">Meeting time</span>
      </FixedHeader>
      <StyledSwiper
        direction={'vertical'}
        slidesPerView={4}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {generateTimeOptions()}
      </StyledSwiper>
    </Container>
  );
};

export default TimePicker;
