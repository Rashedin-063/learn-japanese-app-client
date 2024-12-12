import { Helmet } from 'react-helmet-async';

import React, { useState } from 'react';
import PageTitle from './../../components/PageTitle';

const AddVocabularies = () => {
  const [loading, setLoading] = useState(false);

  const handleAddVocabulary = async (e) => {
    e.preventDefault();
    const vocabularyData = {
      word: e.target.word.value,
      pronunciation: e.target.pronunciation.value,
      whenToSay: e.target.whenToSay.value,
      lessonNo: e.target.lessonNo.value,
      adminEmail: e.target.adminEmail.value,
    };

    try {
      setLoading(true);
      // Here you would typically make an API call to save the data
      console.log('Vocabulary Data:', vocabularyData);
      setLoading(false);
      // Clear form
      e.target.reset();
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='-mt-8 overflow-x-auto'>
      <Helmet>
        <title>Learn Japanese || Add Vocabularies</title>
      </Helmet>
      <div className='md:w-5/6 xl:w-2/3 md:mx-auto rounded-xl'>
        <PageTitle title={'Add New Vocabulary'} />

        <form
          onSubmit={handleAddVocabulary}
          className='space-y-4 bg-green-heaven bg-opacity-10 p-4 md:p-8 lg:px-6 xl:p-8 mt-8 rounded-3xl drop-shadow-2xl'
        >
          <div className='form-control'>
            <label
              htmlFor='word'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Japanese Word
            </label>
            <input
              type='text'
              id='word'
              name='word'
              placeholder='こんにちは'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='form-control'>
            <label
              htmlFor='pronunciation'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Pronunciation
            </label>
            <input
              type='text'
              id='pronunciation'
              name='pronunciation'
              placeholder='Konnichiwa'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='form-control'>
            <label
              htmlFor='whenToSay'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              When to Say
            </label>
            <textarea
              id='whenToSay'
              name='whenToSay'
              placeholder='Used for greeting'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              rows='3'
            />
          </div>

          <div className='form-control'>
            <label
              htmlFor='lessonNo'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Lesson Number
            </label>
            <input
              type='number'
              id='lessonNo'
              name='lessonNo'
              placeholder='1'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='form-control'>
            <label
              htmlFor='adminEmail'
              className='block text-base font-medium text-zen-charcoal mb-1'
            >
              Admin Email
            </label>
            <input
              type='email'
              id='adminEmail'
              name='adminEmail'
              placeholder='admin@example.com'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='form-control mt-6'>
            <button
              disabled={loading}
              type='submit'
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50'
            >
              {loading ? (
                <svg
                  className='animate-spin h-5 w-5 mx-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                'Add Vocabulary'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVocabularies;
