import par_1 from '@/assets/images/parachutes/par-1.png'
import Social_media from '@/components/Social_media';

export default function Slider_card() {
  return(
    <div className="card_wrapper w-[300px]">
      <div className="card_img">
        <a href="#">
          <img src={par_1} alt="Parachute image" />
        </a>
      </div>
      <div className="card_text text-center text-gray-400">
          <a href="#" className="block text-black"><h6>Parachute Name</h6></a>
          <span className="tracking-[2px]">..................</span>
          <p className='text-xs'>laudantium laboriosam atque repellendus, eligendi perferendis veniam autem ea suscipit a!</p>
      </div>
      <div className="social text-center text-gray-400">
        <Social_media/>
      </div>
    </div>
  );
}
