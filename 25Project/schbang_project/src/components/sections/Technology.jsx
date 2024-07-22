import React, { useEffect, useState } from 'react'

const Technology = () => {
    const itCompanies = [
        {
          name: "Google",
          logoURL: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
          description: "Google LLC is an American multinational technology company specializing in Internet-related services and products."
        },
        {
          name: "Microsoft",
          logoURL: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
          description: "Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington."
        },
        {
          name: "Apple",
          logoURL: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
          description: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics."
        },
        {
          name: "Amazon",
          logoURL: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
          description: "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence."
        },
        {
          name: "Facebook",
          logoURL: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          description: "Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California."
        },
        
      ];
      const [countryTime, setCountryTime] = useState({
        India: "",
        London: "",
        Dubai: "",
        Germany: "",
    });

    // Function to get current time in a specified time zone
    function getTimeByTimeZone(timeZone) {
        const options = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const formatter = new Intl.DateTimeFormat([], options);
        return formatter.format(new Date());
    }

    // List of common time zones
    const timeZones = {
        "India": "Asia/Kolkata",
        "London": "Europe/London",
        "Dubai": "Asia/Dubai",
        "Germany": "Europe/Berlin",
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimes = {};
            for (const [country, timeZone] of Object.entries(timeZones)) {
                newTimes[country] = getTimeByTimeZone(timeZone);
            }
            setCountryTime(newTimes);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

  return (
    <div className='h-[11/12] bg-white relative '>
         
        <div className='bg-blu-500 gap-5 flex justify-center'>
            {
                itCompanies.map((item, index)=>(
                    <div key={index} className=" w-2/12 bg-re-500 flex flex-col gap-4 items-center p-5 text-center  ">
                            <img src={item.logoURL} className='h-10' alt="logo-image" />
                            <h1 className='text-xl font-semibold'>{item.name}</h1>
                            <p className='text-sm '>{item.description}</p>

                    </div>
                ))
            }
        </div>
        <div className='flex justify-between py-10 px-[5rem]'>
            {Object.entries(countryTime).map(([country, time]) => (
                <div key={country} className='border px-5 py-3 rounded-full border-black' >
                    <h2>{country}: {time}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Technology