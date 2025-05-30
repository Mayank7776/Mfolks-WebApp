import { Products } from '../../product.jsx';
import ProductCart from '../Common/ProductCart.jsx';
const MainContent = () => {
  return (
    <div>
      <h1 className="flex font-bold text-3xl text-gray-700 my-5 justify-center items-center">Aluminium-Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-col-2 sm:grid-cols-2 gap-5">
        {Products.map((product, index) => (
          <ProductCart key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
