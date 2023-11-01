import { Link } from 'react-router-dom';
import par_1 from '@/assets/images/parachutes/par-1.png';
import Social_media from '@/components/Social_media';


export default function Slider_card({ name, photo_link, rent, description }) {
  return(
    <div className="card_wrapper mx-10">
      <div className="card_img">
        <Link to={`/parachutes/123`}>[;;]
          <img src={photo_link} alt="Parachute image" />
        </Link>
      </div>
      <div className="card_text py-4 text-center text-gray-400 tracking-widest">
          <a href="#" className="block text-black"><h6 className="uppercase">Parachute Name</h6></a>
          <span className="tracking-[4px] inline-block my-3">............</span>
          <p className='text-xs'>{name}</p>
        <div className="social text-center mt-4">
          <Social_media/>
        </div>
      </div>
    </div>
  );
}
