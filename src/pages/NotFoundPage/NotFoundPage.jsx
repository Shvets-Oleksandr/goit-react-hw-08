import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link to={'/'}>Return to the homepage</Link>
    </>
  );
};

export default NotFoundPage;
