import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const user = useSelector((state: RootState) => state.user.user);

  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
