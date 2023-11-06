import { postParachutes } from '@/redux/parachutes/parachutesSlice.js';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useState } from "react";

import Loading_state from '@/components/Loading';
import { setParachute } from '@/redux/parachutes/parachutesSlice';


export default function AddParachute() {
  const { token} = useSelector((store) => store.login);
  const {  isUploading } = useSelector((store) => store.parachutes);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const initial_values = {
    name: '',
    city: '',
    description: '',
    rent: '',
    min_duration: ''
  }

  const [formDB, setFormDB] = useState({...initial_values});

  const resetForm = () => {
    setFormDB({...initial_values});
  }

  const submitHandler = (e) => {
    e.preventDefault();

    // now lets to push to the api 
    dispatch(
      postParachutes({
        token: token,
        body: {
          ...formDB,
          "photo_link": "https://freesvg.org/img/1549153478.png"
        },
      })
    )
      .then((resultAction) => {
        if (!postParachutes.rejected.match(resultAction)) {
          const createdParachute = resultAction.payload;
          console.log(createdParachute);
          setParachute(createdParachute);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    navigate('/parachutes');
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    
    setFormDB((data) => ({
      ...data,
      [name]: value
    }));
  };

  return (
    <div className="form-wrapper font-viga">
      <h2 className="text-center">ADD NEW Parachute</h2>
      
      { 
        (isUploading === true) ? ( <Loading_state /> )
          : (
              <form className="p-5 space-y-4" onSubmit={submitHandler}>
            <input
              className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
              type="text"
              name="name"
              value={formDB.name}
              placeholder="Parachute Name"
              onChange={inputHandler}
              required
            />

            <input
              className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
              type="text"
              name="city"
              value={formDB.city}
              placeholder="City"
              onChange={inputHandler}
              required
            />

            <input
              className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
              type="text"
              name="description"
              value={formDB.description}
              placeholder="Description"
              onChange={inputHandler}
              required
            />

            <input
              className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
              type="number"
              name="rent"
              value={formDB.rent}
              placeholder="Rent  $"
              onChange={inputHandler}
              required
            />

            <input
              className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
              type="number"
              name="min_duration"
              value={formDB.min_duration}
              placeholder="Rent Duration     (hrs)"
              onChange={inputHandler}
              required
            />

            <button
              type="submit"
              className="add-btn py-2 px-4 bg-azure border border-e8e8e8 rounded-[4px] bg-brand_green text-white"
            >
              Add Parachute
            </button>
              </form>
            )
      }
    </div>
  );
}
