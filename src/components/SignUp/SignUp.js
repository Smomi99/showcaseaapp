import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { UseContextProvider } from "../../contexts/StepperContext";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
import Account from "../steps/Account";
import BusinessDetails from "../steps/BusinessDetails";
import CreateAds from "../steps/CreateAds";
import Details from "../steps/Details";
import Final from "../steps/Final";
import Payment from "../steps/Payment";
const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["", "", "", "", "", ""];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <BusinessDetails />;
      case 4:
        return <CreateAds />;
      case 5:
        return <Payment />;
      case 6:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div>
      <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2  border-b-2 mb-12">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <img className="object-contain	" src={logo} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="  text-md text-center font-semibold ">
        <h1>Welcome to Showcase 👋</h1>
        <h1 className="text-gray-500 w-full  p-4">
          Create an account and start showcasing your <br />
          services to your local audience looking for talented pros!
        </h1>
      </div>
      <div className="mx-auto rounded-2xl bg-white pb-2 drop-shadow-2xl w-1/2">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>
      </div>

      <div className="container">
        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
};

export default SignUp;
