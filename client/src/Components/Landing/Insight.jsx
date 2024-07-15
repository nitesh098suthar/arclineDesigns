import React from 'react'

const insight = [
    {
        value : 5000,
        description : "Total listings in the system"
    },
    {
        value : 5000,
        description : "Active listings"
    },
    {
        value : 30,
        description : "Articles in the blog"
    },
]

const Insight = () => {
  return (
    <div className="flex flex-wrap justify-between items-center py-20 bg-lightGrey px-14 mobile:justify-center">
      <div className="mb-6">
      </div>
      <div className="flex flex-wrap justify-between items-center gap-8 mobile:justify-center mobile:flex-col">
        <h1 className="text-black text-4xl text-left font-semibold mobile:text-center">
          Insights and <br /> Performance <br /> Metrics
        </h1>
        {insight.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-primary p-8 rounded-lg w-[300px] shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all"
            >
              <h1 className="text-white text-4xl text-center font-semibold">
                {item.value}+
              </h1>
              <br />
              <p className="text-white text-sm text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Insight
