import par_1 from '@/assets/images/parachutes/par-1.png'
import Social_media from '@/components/Social_media';

export default function Slider_card() {
  return(
    <div className="card_wrapper mx-10">
      <div className="card_img">
        <a href="#">
          <img src={par_1} alt="Parachute image" />
        </a>
      </div>
      <div className="card_text py-4 text-center text-gray-400 tracking-widest">
          <a href="#" className="block text-black"><h6 className="uppercase">Parachute Name</h6></a>
          <span className="tracking-[4px] inline-block my-3">............</span>
          <p className='text-xs'>laudantium laboriosam  eligendi perferendis veniam autem ea suscipit a!</p>
        <div className="social text-center mt-4">
          <Social_media/>
        </div>
      </div>
    </div>
  );
}
