// Example usage of the EDIF Pharma Routing System
// This demonstrates how to add new routes and navigate programmatically

import { ROUTES } from '../../config/routes';
import { useNavigate } from 'react-router-dom';

function ExampleComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    // Navigate to Products overview
    navigate(ROUTES.PRODUCTS);

    // Navigate to specific therapeutic area
    navigate(ROUTES.PRODUCTS_THERAPEUTIC.CARDIOLOGY);

    // Navigate to company leadership
    navigate(ROUTES.COMPANY_LEADERSHIP.EXECUTIVE_TEAM);
  };

  return (
    <div>
      <button onClick={() => navigate(ROUTES.PRODUCTS)}>
        Go to Products
      </button>
    </div>
  );
}

export default ExampleComponent;