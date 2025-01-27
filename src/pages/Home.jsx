import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../api/axiosApi";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
 const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

  // open ai integration
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    if (!input.trim()) return;

//    // Add user's message to the chat
//    const userMessage = { role: 'user', content: input };
//    setMessages((prev) => [...prev, userMessage]);

//    // Call AI API for response
//    try {
//      const response = await axiosApi.post('/api/chat', { message: input });
//      const data = await response.json();

//      // Add AI's response to the chat
//      const aiMessage = { role: 'ai', content: data.reply };
//      setMessages((prev) => [...prev, aiMessage]);

//      setInput('');
//    } catch (error) {
//      console.error(error);
//      toast.error(error.message);
//    } finally {
//      // Clear input
//      setInput('');
//    }
  //  };
  
  const handleSubmit = async (event) => { 
    event.preventDefault();
    event.preventDefault();
    try {
      const responseData = await axios.post(
        'https://chat.blacksand.cloud/api/v1/messages',
        { input: 'Write a short sonnet about Paris in the fall' },
        {
          headers: {
            Authorization: `Bearer bkey-i_rashedin000000000000-c9cdb878`,
          },
        }
      );
      setResponse(responseData.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='min-h-[68vh] flex flex-col justify-center items-center'>
      <div className='text-center space-y-4'>
        <h1 className=' text-3xl md:text-4xl xl:text-5xl  font-semibold '>
          Welcome to Learn Japanese
        </h1>
        <p className=' md:text-md lg:text-lg'>
          One word at a time, immerse yourself in the language of the Land of
          the Rising Sun
        </p>
      </div>

      {/* chat with ai */}
      <div className='min-w-xl border border-green-heaven mt-8 p-8 rounded-lg text-center'>
        <h3 className='font-semibold'>Chat with AI to Learn Japanese</h3>
        <div className='overflow-y-auto mb-2 p-3 border border-green-heaven/50 my-4'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className='my-1'
              style={{
                textAlign: msg.role === 'user' ? 'right' : 'left',
              }}
            >
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong>{' '}
              {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea value={response} readOnly />
          <button type='submit'>Generate Response</button>
        </form>
        {/* <form onSubmit={handleSubmit} className='flex gap-3'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask me...'
            className='flex-1 p-3 border border-[#ddd] rounded-md'
          />
          <button
            type='submit'
            className='py-2 px-5 bg-green-heaven rounded-lg text-zen-serenity hover:bg-green-800'
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};
export default Home;
