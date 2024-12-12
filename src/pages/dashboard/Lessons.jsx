import { Helmet } from "react-helmet-async";
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { axiosApi } from "../../api/axiosApi";
import useLoadLessons from "../../hooks/useLoadLessons";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Lessons = () => {
  const queryClient = useQueryClient();
  const [editingLesson, setEditingLesson] = useState(null); // Track lesson being edited
  const [lessonForm, setLessonForm] = useState({ name: '', number: '' }); // Form data

const [lessons, refetch, isLoading, isError, error] =
  useLoadLessons();

  // delete a lesson
 const handleDelete = (id) => {
   Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!',
   }).then(async (result) => {
     // Make this callback async
     if (result.isConfirmed) {
       try {
         const res = await axiosApi.delete(`/delete-lesson/${id}`);

         if (res.data.deletedCount) {
           toast.success('Vocabulary deleted successfully');
           refetch(); // Ensure refetch is available in the scope
         }
       } catch (error) {
         console.error(error);
         toast.error(`Error: ${error.message}`);
       }
     }
   });
 };

  // Handle edit form submission
  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateLessonMutation.mutate({ id: editingLesson.id, ...lessonForm });
  };

  // Handle delete action


  // Handle lesson edit action
  const handleEditClick = (lesson) => {
    setEditingLesson(lesson);
    setLessonForm({ name: lesson.name, number: lesson.number });
  };

  if (isLoading) return <p>Loading lessons...</p>;
  if (isError) return <p>Error fetching lessons.</p>;

  return (
    <div>
      <Helmet>
        <title>Learn Japanese || Admin - Lessons</title>
      </Helmet>
      <h1>Lessons</h1>
      <table className='table table-sm xl:table-md w-full border border-green-heaven lg:w-3/4 mx-auto mt-8'>
        <thead>
          <tr className=' border-b-2 border-green-heaven text-base text-slate-800 text-center'>
            <th className='border-2 border-green-heaven'>Lesson Name</th>
            <th className='border-2 border-green-heaven'>Lesson No.</th>
            <th className='border-2 border-green-heaven'>Vocabularies</th>
            <th className='border-2 border-green-heaven'>Edit</th>
            <th className='border-2 border-green-heaven'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((lesson) => (
            <tr className='border-b border-green-heaven text-center' key={lesson._id}>
              <td className='border border-green-heaven text-sm font-semibold'>
                {lesson?.lessonName}
              </td>
              <td className='border border-green-heaven text-sm font-semibold'>
                {lesson?.lessonNumber}
              </td>
              <td className='border border-green-heaven text-sm font-semibold'>
                {lesson.vocabularyCount}
              </td>
              <td className='border border-green-heaven text-sm font-semibold text-center'>
                <button onClick={() => handleUpdate(lesson._id)}>
                  <FaEdit
                    size='20'
                    className='cursor-pointer text-autumn-ember ml-1 hover:scale-125 transition duration-300 ease'
                  />
                </button>
              </td>
              <td className='border- border-green-heaven text-xs font-semibold'>
                <button onClick={() => handleDelete(lesson._id)}>
                  <MdDeleteForever
                    size='24'
                    className=' text-crimson-gate  hover:scale-125 transition duration-300 ease mt-[6px]'
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit form */}
      {editingLesson && (
        <div>
          <h2>Edit Lesson</h2>
          <form onSubmit={handleEditSubmit}>
            <div>
              <label>
                Lesson Name:
                <input
                  type='text'
                  value={lessonForm.name}
                  onChange={(e) =>
                    setLessonForm({ ...lessonForm, name: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Lesson Number:
                <input
                  type='number'
                  value={lessonForm.number}
                  onChange={(e) =>
                    setLessonForm({ ...lessonForm, number: e.target.value })
                  }
                  required
                />
              </label>
            </div>
            <button type='submit'>Save Changes</button>
            <button type='button' onClick={() => setEditingLesson(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Lessons;
