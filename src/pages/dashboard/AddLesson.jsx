import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useState } from 'react';
import { axiosApi } from '../../api/axiosApi';
import { useOutletContext } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';
import { postLessonInfo } from '../../api/userApi';

const AddLesson = () => {
  const [loading, setLoading] = useState(false);
  const { isActive, handleToggle } = useOutletContext();

  const handleAddLesson = async (e) => {
    e.preventDefault();
    const lessonData = {
      lessonName: e.target.lessonName.value,
      lessonNumber: e.target.lessonNumber.value,
    };

    try {
      setLoading(true);
      postLessonInfo(lessonData)
      setLoading(false);
    } catch (error) {
    console.error(error.message);
    } finally {
      setLoading(false);
      
    }
  };

  return (
    <div
      onClick={isActive ? handleToggle : undefined}
      className='mt- lg:mt-8 overflow-x-auto'
    >
      <Helmet>
        <title>Learn Japanese || Add Lesson</title>
      </Helmet>

      <div className='md:mx-4 lg:w-5/6 xl:w-2/3 lg:mx-auto md:p-8 lg:p-12 rounded-xl'>
        <PageTitle title='Add Lessons' />
        <form
          onSubmit={handleAddLesson}
          className='space-y-2 bg-green-heaven p-4 md:p-16 lg:p-6 xl:p-16 bg-opacity-10 rounded-3xl drop-shadow-2xl mt-8'
        >
          <div className='form-control'>
            <label htmlFor='lessonName' className='font-medium'>
              Lesson Name
            </label>
            <input
              type='text'
              id='lessonName'
              name='lessonName'
              placeholder='Lesson Name'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
          </div>

          <div className='py-1 rounded-md'>
            <label htmlFor='lessonNumber' className='font-medium'>
              Lesson Number
            </label>
            <input
              type='number'
              placeholder='Lesson Number'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              name='lessonNumber'
              id='lessonNumber'
            />
          </div>

          <div className='form-control mt-6'>
            <button
              disabled={loading}
              type='submit'
              className='btn bg-green-heaven text-white hover:bg-green-600 mt-2'
            >
              {loading ? (
                <ImSpinner9 className='animate-spin m-auto text-white' />
              ) : (
                'Add Lesson'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLesson;
