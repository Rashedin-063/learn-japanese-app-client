import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosApi } from "../api/axiosApi";
import { toast } from "react-toastify";

const Home = () => {
 const [messages, setMessages] = useState([]);
 const [input, setInput] = useState('');

 const handleSubmit = async (e) => {
   e.preventDefault();
   if (!input.trim()) return;

   // Add user's message to the chat
   const userMessage = { role: 'user', content: input };
   setMessages((prev) => [...prev, userMessage]);

   // Call AI API for response
   try {
     const response = await axiosApi.post('/api/chat', { message: input });
     const data = await response.json();

     // Add AI's response to the chat
     const aiMessage = { role: 'ai', content: data.reply };
     setMessages((prev) => [...prev, aiMessage]);

     setInput('');
   } catch (error) {
     console.error(error);
     toast.error(error.message);
   } finally {
     // Clear input
     setInput('');
   }
 };

  return (
    <div className='min-h-[68vh] flex flex-col justify-center items-center'>
      <div className='text-center space-y-4'>
        <h1 className=' text-3xl md:text-4xl xl:text-5xl  font-semibold '>
          Welcome to Learn Japanese
        </h1>
        <p className='text-xl md:text-2xl lg:text-2xl'>
          One word at a time, immerse yourself in the language of the Land of
          the Rising Sun.
        </p>
      </div>

      {/* chat with ai */}
      <div
        style={{
          margin: '20px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <h3>Chat with AI to Learn Japanese</h3>
        <div
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            marginBottom: '10px',
            border: '1px solid #ddd',
            padding: '10px',
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                margin: '5px 0',
                textAlign: msg.role === 'user' ? 'right' : 'left',
              }}
            >
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong>{' '}
              {msg.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask me in Japanese...'
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          <button
            type='submit'
            style={{
              padding: '10px 20px',
              background: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
