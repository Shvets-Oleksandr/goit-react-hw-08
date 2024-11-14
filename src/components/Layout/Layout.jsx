import AppBar from '../AppBarcom/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Layout;
