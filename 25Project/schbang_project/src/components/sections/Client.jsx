import React from "react";

const Client = () => {
  const itCompanies = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    },
    {
      name: "Twitter",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Oracle_logo.svg",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/Cisco_logo.svg",
    },
  ];

  return (
    <div className=" px-[10rem]  h-[50vh] bg-re-500 flex flex-col items-center relative bg-white">
      <marquee style={{ color: "red", fontSize: "3em" }}>
        <div className="flex gap-5 mt-10">
          {itCompanies.map((item) => (
            <img className="h-10" src={item.logo} key={item.logo} alt="logo" />
          ))}
        </div>
      </marquee>
      <marquee
        
        direction="right"
       
        style={{ color: "red", fontSize: "3em" }}
      >
        <div className="flex gap-5">
          {itCompanies.map((item) => (
            <img className="h-10" src={item.logo} key={item.logo} alt="logo" />
          ))}
        </div>
      </marquee>
    </div>
  );
};

export default Client;
