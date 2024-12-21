import React from "react";
import PostCards from "./PostCard";

function Posts({ postData ,selectedTopic, setSelectedTopic}) {
//   const [selectedTopic, setSelectedTopic] = React.useState("all");

  const handleTopicChange = (e) => { 
    setSelectedTopic(e.target.value);
    // console.log(e.target.value);
   };

  return (
    <div id="posts" className="mt-5 ">
      <div className="flex justify-between items-center mx-5">
        <div id="dropdown">
          <label htmlFor="topics"></label>
          <select className="px-3 border rounded-2xl font-semibold" id="topics" value={selectedTopic} onChange={handleTopicChange}>
            <option value="all">All</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
        <h1 className="text-center text-black dark:text-white text-2xl font-bold font-playfair tracking-wider">
          Blogs
        </h1>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {postData  ? (
          postData.sources ? (
            postData.sources.map((item) => (
                <PostCards key={item.id} data={item} />
              ))
          ): (
            postData.articles.map((item) => (
                <PostCards key={item.id} data={item} />
              ))
          )

        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
