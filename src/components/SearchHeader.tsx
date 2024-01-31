import React, { useEffect, useState } from 'react';
import { BsYoutube } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userInput === '') return;
    // logic
    navigate(`/videos/${userInput}`);
  };

  useEffect(() => setUserInput(keyword || ''), [keyword]);

  return (
    <header className='w-full flex justify-center items-center p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>

      <form onSubmit={handleOnSubmit} className='w-full flex justify-center '>
        <input
          type='text'
          placeholder='Search..'
          value={userInput}
          onChange={handleOnChange}
          className='w-7/12 p-2 outline-none bg-black text-gray-50 rounded-l-2xl pl-4'
        />
        <button type='submit' className='bg-zinc-600 px-4 rounded-r-2xl'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
