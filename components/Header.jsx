import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="flex flex-row justify-center">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue hover:text-red-600">The Huntsville Journal</span>
          </Link>
        </div>
        <div className="flex flex-row justify-center">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-blue hover:text-red-600 ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
          <Link href="/jobs"><span className="md:float-right mt-2 align-middle text-blue hover:text-red-600 ml-4 font-semibold cursor-pointer">Jobs</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
