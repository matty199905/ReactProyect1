import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import ModalCart from './Components/Navbar/Cart/ModalCart/ModalCart';
import Navbar from './Components/Navbar/Navbar';
import ResponsiveMenu from './Components/Navbar/ResponsiveMenu/ResponsiveMenu.jsx';
import ModalUser from './Components/Navbar/User/UserIcon/ModalUser';
import RoutesApp from './Routes/Routes';



function App() {
  return (

    <Layout>
        <Navbar/>
        <ResponsiveMenu/>
        <ModalUser/>
        <ModalCart/>
        <RoutesApp />
        <Footer />
    </Layout>

  );
}

export default App;
