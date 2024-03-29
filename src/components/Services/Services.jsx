import { RatingStar } from "flowbite-react/lib/esm/components/Rating/RatingStar";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useLoaderData } from "react-router-dom";
import useTitleChange from "../../hooks/useTitleChange";
import RatingsStar from "../common/RatingsStar/RatingsStar";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";

const Services = () => {
  const myservices = useLoaderData();
  useTitleChange(`(${myservices.length}) Services`);

  const shortenDescription = (desc) => {
    const cut = desc.slice(0, 100) + " ...";
    return cut;
  };

  return (
    <section className="container mx-auto mt-10 mb-24">
      <ScrollToTop />
      <h2 className="text-center py-10 text-2xl font-bold text-woodDark">
        MY SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myservices.map(
          ({
            service_id,
            service_img,
            service_title,
            service_price,
            service_rating,
            service_description,
          }) => (
            <div
              key={service_id}
              className="p-5 rounded-md  mx-auto bg-woodLight/10 shadow flex flex-col justify-between"
            >
              <PhotoProvider>
                <PhotoView src={service_img}>
                  <img
                    src={service_img}
                    alt=""
                    className="md:w-72 md:h-72 object-cover mx-auto rounded-md"
                  />
                </PhotoView>
              </PhotoProvider>
              <div className="mt-5 flex flex-col gap-5 justify-between">
                <p className="text-xl font-medium">{service_title}</p>
                <div className="flex items-center justify-between">
                  <p>Price: ${service_price}</p>
                  <span>
                    <RatingsStar stars={service_rating} />
                  </span>
                </div>
                <p>{shortenDescription(service_description)}</p>
                <Link
                  to={`/services/${service_id}`}
                  className="border border-woodLight py-2 px-4 text-woodLight hover:bg-woodDark hover:text-white rounded-md text-center"
                >
                  Details
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
