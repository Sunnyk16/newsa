import React from 'react';

function NewsArticle({ author, title, description, content, urlToImage }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4 flex  flex-col">
      <img className="w-full h-64 object-cover object-center" src={urlToImage} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-700 mb-4">{content}</p>
        <p className="text-gray-700">Author: {author}</p>
        <div className="mt-4 flex justify-end">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;
