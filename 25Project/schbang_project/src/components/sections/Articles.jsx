import React from "react";

const Articles = () => {
  const articles = [
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
    {
      title: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      link: "Schbang appoints Jitto George as Executive Vice President - Media Solutions",
      duration: "3 minutes",
    },
  ];
  return (
    <div className="h-screen p-[4rem] flex flex-col gap-3 justify-around bg-re-400 relative bg-white">
      <h1 className="text-[2rem] font-bold">Trending now</h1>
      <div>
        <div className="bg-gree-400 h-[70vh] w-8/12 gap-2 flex flex-col p-2 overflow-auto scrollbar-hide mt-5">
            {
                articles.map((item, index)=>(
                    <div key={index} className="bg-blu-500 flex justify-between p-4 items-center  border-b-2 ">
                        <div className="flex flex-col  items-start gap-4">
                            <button className="rounded-full border border-black px-2">Press Release</button>
                            <h1 className="font-bold text-lg">{item.title}</h1>
                        </div>
                        <div>
                            <p>{item.duration}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="image">

        </div>
      </div>
    </div>
  );
};

export default Articles;
