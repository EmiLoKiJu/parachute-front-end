import { Link } from 'react-router-dom';
import Social_media from '@/components/Social_media';
import PropTypes from 'prop-types';

export default function Slider_card({ name, photo_link, rent, id }) {
  return(
    <div className="card_wrapper mx-10">
      <div className="card_img">
        <Link to={`/parachutes/${id}`}>
          <img src={photo_link} alt="Parachute image" />
        </Link>
      </div>
      <div className="card_text py-4 text-center text-gray-400 tracking-widest">
          <a href="#" className="block text-black"><h6 className="uppercase">{name}</h6></a>
          <span className="tracking-[4px] inline-block my-3">............</span>
          <p className='text-xs'>rent: ${rent}</p>
        <div className="social text-center mt-4">
          <Social_media/>
        </div>
      </div>
    </div>
  );
}

Slider_card.propTypes = {
  name: PropTypes.string.isRequired,
  photo_link: PropTypes.string.isRequired,
  rent: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
