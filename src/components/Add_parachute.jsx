import { useState } from "react";

export default function AddParachute() {
  // const dispatch = useDispatch();
  
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
    // dispatch here formDB
    resetForm();
  };
  console.log(formDB);
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
          placeholder="Rent"
          onChange={inputHandler}
          required
        />

        <input
          className="w-full py-2 px-4 outline-none border border-e8e8e8 rounded-[4px]"
          type="number"
          name="min_duration"
          value={formDB.min_duration}
          placeholder="Min. Duration"
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
    </div>
  );
}
