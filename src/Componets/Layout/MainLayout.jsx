import PropTypes from 'prop-types';
import Sidebar from "../Navigation/Sidebar"

const MainLayout = ({children}) => {

    return (
        <Sidebar>
            {children}
        </Sidebar>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node 
};

export default MainLayout