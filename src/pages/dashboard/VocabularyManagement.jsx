import { Helmet } from "react-helmet-async";
import useLoadVocabularies from "../../hooks/useLoadVocabularies";
import { useState } from "react";

const VocabularyManagement = () => {
 const [filter, setFilter] = useState('');


    const [vocabularies, refetch, isLoading, isError, error] =
    useLoadVocabularies(filter);
  
  // console.log(vocabularies,)
  
  return (
    <>
      <Helmet>
        <title>Vocabulary || Vocabulary Management</title>
      </Helmet>

      <div className='overflow-x-auto '>
        <table className='table table-sm lg:table-md  w-full border-2 border-green-lantern lg:w-3/4 mx-auto'>
          {/* head */}
          <thead>
            <tr className=' border-b-2 border-green-lantern text-lg text-slate-800 text-center'>
              <th className='border-2 border-green-lantern'>#</th>
              <th className='border-2 border-green-lantern'>User Full Name</th>
              <th className='border-2 border-green-lantern'>Email</th>
              <th className='border-2 border-green-lantern'>Subscription</th>
              <th className='border-2 border-green-lantern'>User Status</th>
              <th className='border-2 border-green-lantern'>User Role</th>
              <th className='border-2 border-green-lantern'>Admin Control</th>
            </tr>
          </thead>
          <tbody>
            {vocabularies?.map((user, index) => (
              <tr className='border-b border-green-lantern' key={user._id}>
                <td className='border border-green-lantern text-sm font-semibold'>
                  {index + 1}
                </td>

                <td className='border border-green-lantern text-sm font-semibold '>
                  {user?.displayName}
                </td>
                <td className='border border-green-lantern text-sm font-semibold'>
                  {user?.email}
                </td>
                <td
                  className={`border border-green-lantern text-sm font-semibold ${
                    user?.subscription === 'premium'
                      ? 'font-wendy text-deep-ocean font-normal text-[1rem]'
                      : ''
                  }`}
                >
                  {user?.subscription === 'premium' ? 'Premium' : 'Usual'}
                </td>
                <td
                  className={`border border-green-lantern text-sm font-semibold ${
                    user?.role === 'Requested'
                      ? 'text-deep-ocean font-extrabold'
                      : ''
                  }`}
                >
                  {user?.status === 'requested' ? (
                    <span className='text-red-600 text-base'>Requested</span>
                  ) : (
                    'Verified'
                  )}
                </td>
                <td className='border border-green-lantern text-sm font-semibold'>
                  {user.role === 'admin' ? (
                    <span className='font-wendy font-normal text-green-lantern text-[18px]'>
                      Admin
                    </span>
                  ) : (
                    <span>User</span>
                  )}
                </td>
                <td className='border- border-green-lantern text-xs font-semibold'>
                  {user.role === 'admin' ? (
                    <button
                      disabled={user.email === originalAdmin}
                      onClick={() => handleRemoveAdmin(user.email)}
                      className='border-2 px-2 py-1 border-red-700 rounded-full hover:bg-red-200 w-[110px] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-600'
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      className='border-2 px-2 py-1 border-green-lantern rounded-full hover:bg-green-200  w-[110px]'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default VocabularyManagement