import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Carousal from "./components/Carousal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostCards from "./components/PostCard";
import Posts from "./components/Posts";

const url = import.meta.env.VITE_API;
const postUrl = import.meta.env.VITE_POST_API;
const key = import.meta.env.VITE_API_KEY;

export const dataRef = { current: null };

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      dataRef.current = jsonData;
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  const fetchPostData = async () => {
    try {
      const response = await fetch(postUrl);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      setPostData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPostData();
  }, []);

  const selectedDataFetch = async () => {
    try {
      let url = null;
      selectedTopic === "all"
        ? url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}`
        : (url = `https://newsapi.org/v2/top-headlines/sources?category=${selectedTopic}&apiKey=${key}`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      setSelectedData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (selectedTopic) {
      selectedDataFetch();
      console.log(selectedData);
    }
  }, [selectedTopic]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div id="body " className="bg-gray-100 dark:bg-gray-800">
      <Header />
      <Carousal />
      {selectedData !== null ? (
        <Posts
          postData={selectedData}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
      ) : (
        <Posts
          postData={postData}
          selectedTopic={selectedTopic}
          setSelectedTopic={setSelectedTopic}
        />
      )}

      <Footer />
    </div>
  );
};

export default App;
