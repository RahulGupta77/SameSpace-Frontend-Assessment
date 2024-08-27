import React from "react";

const BrandAndUser = () => {
  return (
    <>
      <div className="h-[150px] w-[150px]">
        <img
          src="/assets/logo/logo.png"
          className="h-full w-full"
          alt="Music-Logo"
        />
      </div>
      <div className="mb-14">
        <div className="h-[50px] w-[50px] cursor-pointer">
          <a
            href="https://rahuls-portfolio-five.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/profileImage/profileImage.png"
              className="h-full w-full"
              alt="User Profile"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default BrandAndUser;
