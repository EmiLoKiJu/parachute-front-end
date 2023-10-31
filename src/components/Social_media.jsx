import { FaFacebookF, FaTwitter, FaCamera } from 'react-icons/fa'

export default function Social_media() {
  const social_media = [
    { title: 'Facebook', link: '#', icon: <FaFacebookF className="inline-block"/> },
    { title: 'Twitter', link: '#', icon:<FaTwitter className="inline-block"/> },
    { title: 'Shot', link: '#', icon:<FaCamera className="inline-block"/> },
    ]

  const social_media_ajax = social_media.map((m,i) =>{
    return(
      <li key={i + 1} className="">
        <a className="flex justify-center items-center w-[35px] h-[35px]
                      border-2 border-gray-400 rounded-full"
                      title={m.title} href={m.link}>{m.icon}</a>
      </li>
    );
  })

  return(
    <div className="social_media_container inline-block">
      <ul className='flex space-x-6'>
        {social_media_ajax}
      </ul>
    </div>
  );
}