import { ILayoutProps } from '../interfaces/ILayoutPropsInterface';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './Layout.css';

const Layout = ({ children } : ILayoutProps) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
