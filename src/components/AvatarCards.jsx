import { useState } from "react";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Avatar(props) {
  const [isLiked, setIsLiked] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  function copied() {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Link to={`/avatar/${props.id}`}>
      <div className="p-5 m-2 rounded-xl bg-red-100/30 shadow-xl cursor-pointer ">
        <div className="relative">
          <img src={props.url} alt={props.alt} className="rounded-lg" />

          <div className="absolute right-4 top-4 flex items-center gap-2">
            <button className="px-3 py-1 bg-custom-blue-1 hover:bg-custom-blue-1/70 rounded-lg text-white flex items-center gap-1 ">
              <Icon icon="material-symbols:add-shopping-cart" />
              <span>Add</span>
            </button>

            <Icon
              icon={
                !isLiked
                  ? "material-symbols:favorite-outline"
                  : "material-symbols:favorite"
              }
              width={30}
              className={!isLiked ? "text-white" : "text-red-500"}
              onClick={() => setIsLiked(!isLiked)}
            />
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-2xl lg:text-3xl ">{props.info}</h3>
        </div>

        <div className="flex items-center space-x-4 mt-3">
          <img
            className="w-10 h-10 rounded-full"
            src="../public/profile.jpg"
            alt="Profile image"
          />
          <div className="font-medium ">
            <div>Avatar Joes</div>
            <div className="text-sm text-gray-500 ">Joined in August 2014</div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 ">
              {props.rating}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-900"
            >
              {props.likes} likes
            </a>
          </div>

          <div className="text-end flex items-end justify-end">
            <span className="text-base md:text-lg mr-1">$</span>
            <h4 className="text-2xl md:text-3xl font-medium">{props.price}</h4>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <Icon icon="material-symbols:desktop-windows-rounded" width={25} />
          <span>{props.fits}</span>
        </div>
        <div className="mt-3  flex items-center gap-4">
          <span className="text-sm lg:text-base">{props.additionalInfo}</span>
          {!isCopied ? (
            <div className="tooltip" data-tip="Copy Url">
              <Icon
                icon="material-symbols:content-copy-outline"
                width={20}
                onClick={copied}
              />
            </div>
          ) : (
            <div className="tooltip" data-tip="Copied Url">
              <Icon icon="icon-park-twotone:success" width={20} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Avatar;
