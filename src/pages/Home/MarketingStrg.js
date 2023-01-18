import React from "react";

function MarketingStrg() {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
      src: "https://assets2.lottiefiles.com/packages/lf20_bsb0llfx.json",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
      src: "https://assets8.lottiefiles.com/private_files/lf30_fam7us4a.json",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
      src: "https://assets10.lottiefiles.com/packages/lf20_zwn6fmnu.json",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
      src: "https://assets1.lottiefiles.com/packages/lf20_o1ewaver.json",
    },
  ];
  return (
    <div>
      <h1 className=" text-primary text-4xl font-semibold mb-14 mob:text-2xl">
        Are you looking for a way to boost the growth of your business?
      </h1>
      <h1 className="text-primary text-6xl font-semibold mb-14 mob:text-4xl">
        Team <span className="text-secondary">Nebula</span> is here ...
      </h1>
      <p className="text-gray-600 text-xl mb-14 mob:text-base">
        Interested in the opinions of business professionals about different
        marketing strategies. We researched recent surveys and reports to
        compile a list of 10 commonly recognized successful business-to-business
        marketing strategies across industries. The strategies are listed in no
        particular order.
      </p>
      <div className="grid grid-cols-2 gap-x-36 gap-y-16 mb-14 mob:grid-cols-1">
        {strategies.map((content) => {
          return (
            <div className="border border-primary rounded p-8 mob:p-5  ">
              <h1 className="text-center text-secondary font-bold text-xxl -mt-11 bg-white border border-secondary ">
                {content.title}
              </h1>
              <div className=" w-36 mb-3">
                <lottie-player
                  src={content.src}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <p> {content.description}</p>
            </div>
          );
        })}
      </div>
      <h1 className="text-primary text-6xl font-semibold mb-14 mob:text-4xl ">
            Why <span className="text-secondary">Nebula</span> ?
          </h1>
      <div className="flex justify-between mob:flex-col-reverse ">
        <div>
         
          <p className="text-gray-600 text-xl mb-14 mob:text-base">
            Nebula is able to provide a wide variety of products at a
            competitive price. We have a reputation for providing high-quality
            products and excellent customer service. We can help you find the
            right product to meet your specific needs and preferences.We provide
            a user-friendly and secure website. excellent customer service and
            supports
          </p>
        </div>
        <div className=" w-1/3 mb-10 -mt-16 mob:-mt-4">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_ecsh092g.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default MarketingStrg;
