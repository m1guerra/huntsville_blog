import React, { useState, useEffect } from 'react';
import { getJobPost } from '../services';

const JobBoard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getJobPost().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="flex flex-row justify-center flex-wrap">
      {categories.map((jobSubmissions, index) => (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 m-8 max-w-sm">
          <p className={`${(index === categories.length - 1)} pb-3 mb-3`}>{jobSubmissions.title}</p>
          <p className={`${(index === categories.length - 1)} pb-3 mb-3`}>{jobSubmissions.perHour}</p>
          <p className={`${(index === categories.length - 1)} pb-3 mb-3`}>{jobSubmissions.description}</p>
          <a href={jobSubmissions.jobLink}><span className="md:float-right mt-2 align-middle text-blue hover:text-red-600 ml-4 font-semibold cursor-pointer">Apply Here</span></a>
        </div>
      ))}
    </div>
  );
};
export default JobBoard;
