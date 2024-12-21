import React from "react";

function PostCards({data}) {

    if(data === null) return <p>Loading...</p>

  return (
    <div
      id="body"
      className="bg-white text-start border flex flex-col justify-center  border-black rounded-2xl mx-5 md:w-[30vw] h-[300px]"
    >
      <div id="title">
        <h1 className="px-3 text-2xl font-bold">{
          data.title? (data.title): (data.name)
          }</h1>
      </div>
      <div id="description">
        <p className="px-3">{data.description}</p>
      </div>
      <div
        id="link"
        className="w-full mt-5 px-3"
      >
        <a className=" text-blue-500 text-lg mt-3 " href={data.url}>
          Read more
        </a>
      </div>
    </div>
  );
}

export default PostCards;
