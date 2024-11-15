import DocumentTitle from '../../components/DocumentTitle';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.pageContainer}>
        <h1>Welcome to the Contacts App</h1>
        <b className={css.pageDscr}>Organize contacts easily and safely</b>
      </div>
    </>
  );
};

export default HomePage;
