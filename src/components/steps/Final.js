import bgsuccess from "../../assets/bgsuccess.png";
import success from "../../assets/success.png";

export default function Final() {
  return (
    <div className="container ">
      <div className="flex flex-col items-center">
        <div className="wrapper ">
          <img className="w-24 absolute" src={bgsuccess} alt="" />
          <svg
            className="checkmark "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle "
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-4">
          <img src={success} alt="" />
        </div>
        <div className="text-md text-center	mt-4 font-semibold text-gray-500">
          <h1>I have successfully created your first ad on Showcase! </h1>
          <h1>
            Don’t forget to share it on your social channels to maximize
            exposure to your service!
          </h1>
        </div>
        <div className="grid grid-cols-4">
          {/* <div className=''>
            <img src={facebook} alt="" />
            <h1>facebook</h1>
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div> */}
        </div>
        <a className="mt-5" href="/user/dashboard">
          <button className="h-10 px-5 text-blue-700 transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:commonColor ">
            Close
          </button>
        </a>
      </div>
    </div>
  );
}
