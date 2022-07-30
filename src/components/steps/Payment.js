import cards from '../../assets/cards.png';
import { useStepperContext } from "../../contexts/StepperContext";
export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl mb-2">Contact details</h1>
        <p className="text-gray-500">
          Please enter your contact details to set up your account
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Credit Card
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["card"] || ""}
              name="card"
              placeholder="Credit Card#"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="w-full mx-2 flex-1">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Exp
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["exp"] || ""}
              name="exp"
              placeholder="YY/MM/DD"
              type="text"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Security Code
          </div>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["code"] || ""}
              name="password"
              placeholder="***"
              type="password"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
        <div className="mx-2 w-full flex-1">
          <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            
          </div>
          <div className="my-1 flex rounded  border-gray-200 bg-white ">
            <img src={cards} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
}
