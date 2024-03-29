import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import RatingsStar from "../common/RatingsStar/RatingsStar";

const MyServices = ({ myservices }) => {
  const shortenDescription = (desc) => {
    const cut = desc.slice(0, 100) + " ...";
    return cut;
  };

  return (
    <section className="container mx-auto my-10">
      <h2 className="text-center py-10 text-4xl font-bold text-woodDark">
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
              className="p-5 rounded-md  mx-auto  bg-woodLight/10 shadow flex flex-col justify-between"
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
                    {" "}
                    <RatingsStar stars={service_rating} />
                  </span>
                </div>
                <p>{shortenDescription(service_description)}</p>
                <div className="mx-auto w-full">
                  <Link
                    to={`/services/${service_id}`}
                    className="block border border-woodLight py-2 px-4 text-woodLight hover:bg-woodDark hover:text-white rounded-md text-center"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="my-10 mb-24 text-center">
        <Link
          to="/services"
          className=" border bg-woodLight border-woodLight py-2 px-4 text-white hover:bg-woodDark hover:text-white rounded-md "
        >
          See All
        </Link>
      </div>
    </section>
  );
};

export default MyServices;
