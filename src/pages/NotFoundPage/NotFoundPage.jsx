import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link className={css.goHomeBtn} to={'/'}>
        Return to the homepage
      </Link>
    </>
  );
};

export default NotFoundPage;
