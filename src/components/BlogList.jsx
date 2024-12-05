import React from 'react';

const BlogList = () => {
  const posts = [
    { id: 1, title: 'How to Learn React', description: 'A beginner’s guide to React.' },
    { id: 2, title: 'Why Use Tailwind CSS?', description: 'Tailwind CSS advantages for developers.' },
    { id: 3, title: 'Understanding JavaScript', description: 'Mastering JavaScript basics and beyond.' },
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.description}</p>
            <a href="#" className="text-blue-500 hover:underline mt-4 block">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
