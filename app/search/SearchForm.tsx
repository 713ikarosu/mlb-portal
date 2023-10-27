'use client';
import { useState } from 'react';

export default function SearchForm() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Search query: ${query}`);
    // ここで検索を実行する処理を実装する
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='search'>Search:</label>
      <input
        type='text'
        id='search'
        name='search'
        value={query}
        onChange={handleChange}
        className='border border-gray-400 rounded-md px-4 py-2'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Search
      </button>
      <p>{query}</p>
    </form>
  );
}
