import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createShortUrl, redirectShortUrl } from '../redux/features/url/urlThunks';
import {
  selectUrls,
  selectUrlLoading,
  selectUrlError,
} from '../redux/features/url/urlSelectors';

const UrlForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const urls = useSelector(selectUrls);
  const loading = useSelector(selectUrlLoading);
  const error = useSelector(selectUrlError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (!trimmed) return;

    try {
      const url = new URL(trimmed);
      const parts = url.pathname.split('/');
      const shortId = parts[parts.length - 1];
      dispatch(redirectShortUrl(shortId));
    } catch {
      dispatch(createShortUrl(trimmed));
    }

    setInput('');
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🔗 URL Shortener & Expander
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          placeholder="Enter a long URL or a short URL..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 text-white font-semibold rounded-xl transition duration-200 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Processing...' : 'Submit'}
        </button>
      </form>

      {error && (
        <div className="mt-4 px-4 py-2 bg-red-100 text-red-700 font-medium rounded-lg">
          ⚠️ {error}
        </div>
      )}

      <ul className="mt-6 space-y-4">
        {urls.map((url, i) => (
          <li
            key={i}
            className="bg-gray-50 border border-gray-200 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div className="text-sm text-gray-700 break-words">
              <strong className="block text-gray-800">{url.originalUrl}</strong>
              ➡️
              <button onClick={() => {
                window.open(url.shortUrl.startsWith('http') ? url.shortUrl : `${window.location.origin}/${url.shortUrl}`, '_blank');
              }}>

                {url.shortUrl}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlForm;
