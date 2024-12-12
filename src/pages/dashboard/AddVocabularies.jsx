import { Helmet } from 'react-helmet-async';

import React, { useState } from 'react';
import PageTitle from './../../components/PageTitle';
import useAuth from '../../hooks/useAuth';
import { ImSpinner9 } from 'react-icons/im';
import { postVocabularyInfo } from '../../api/userApi';

const AddVocabularies = () => {
  const [loading, setLoading] = useState(false);
 const { user, logOutUser } = useAuth();

  const handleAddVocabulary = async (e) => {
    e.preventDefault();
    const vocabularyData = {
      word: e.target.word.value,
      pronunciation: e.target.pronunciation.value,
      whenToSay: e.target.whenToSay.value,
      lessonNo: e.target.lessonNo.value,
      adminEmail: user?.email || 'ading@example.com',
    };

    try {
      setLoading(true);
     {user && postVocabularyInfo(vocabularyData);}
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
    <div className=' overflow-x-auto'>
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

          {/* lesson no */}
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

          {/* when to say */}
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

          <div className='form-control pt-4'>
            <button
              disabled={loading}
              type='submit'
              className='w-full bg-green-heaven text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50'
            >
              {loading ? (
                <ImSpinner9 className='animate-spin m-auto text-deep-ocean' />
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
