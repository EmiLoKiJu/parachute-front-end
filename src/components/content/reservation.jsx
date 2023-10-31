import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchAllParachutes } from '../../redux/parachutes/parachutesSlice';

const Reservation = (props) => {
  const { authorized } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [parachuteId, setParachuteId] = useState(id || 1);
  const [flightDate, setFlightDate] = useState('');
  const { parachutesList } = useSelector((store) => store.parachutes);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  useEffect(() => {
    dispatch(fetchAllParachutes());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(reserve({ parachuteId, flightDate }));
  };
  
  if (!authorized) {
    return (<></>);
  }

  return (
    <div className="bg-center bg-cover w-full">
      <div className="w-full h-full flex flex-col items-center bg-lime bg-opacity-80 bg-cover py-[150px]">
        <h1 className="text-center text-white-100 font-extrabold text-5xl"> ADD A NEW RESERVATION </h1>
        <form className="flex flex-col justify-center items-center mt-[200px] bg-gray-100 bg-opacity-70 w-[400px] p-[30px]" onSubmit={handleSubmit}>
          <div className="my-[20px] w-full">
            <p className="font-bold text-2xl">Select Parachute:</p>
            <select
              id="parachute-select"
              onChange={(e) => setParachuteId(e.target.value)}
              value={parachuteId}
              className="w-full"
            >
              {parachutesList.map((parachute) => (
                <option key={parachute.id} value={parachute.id}>
                  { parachute.name }
                </option>
                            ))}
            </select>
          </div>

          <div className="my-[20px] w-full">
            <p className="text-white-100 font-bold text-2xl">Flight Date:</p>
            <input
              id="flight-date"
              type="date"
              value={flightDate}
              onChange={(e) => setFlightDate(e.target.value)}
              className="w-full"
            />
          </div>
          <button className="bg-lime rounded-full px-6 py-2 mt-6 flex items-center" type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

Reservation.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default Reservation;
