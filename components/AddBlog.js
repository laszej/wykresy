import { useState } from 'react';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    console.log('Submitting blog post', { title, content });
  
    try {
      const response = await fetch('/api/addblog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });
  
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
  
      setSuccess(true);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error submitting blog post', error);
      setError(error.message);
    } finally {
      console.log('Resetting loading state');
      setLoading(false);
    }
  };

  return (
    <div style={{display: "flex", flexDirection:"column", marginBottom: "2rem"}}>
      <form onSubmit={handleSubmit}>
        <div>
          <p htmlFor="title">Autor: </p>
          <input style={{width: "300px"}}
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <p style={{marginTop: "1rem"}}>treść wiadomości: </p>
          <textarea style={{width: "300px"}}
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary"disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {error && <p>{error}</p>}
        {success && <p>Blog post submitted successfully!</p>}
      </form>
    </div>
  );
};

export default AddBlog;