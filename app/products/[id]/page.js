import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // ✅ updated
import { productsData } from '@/lib/data';
import TouchWithUs from '@/components/home/TouchWithUs';
import Link from 'next/link';
import Product_herosection from '@/components/products/Product_herosection';

const ProductD = async ({ params }) => {
  const { id } = await params;
  const product = productsData.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  // ✅ updated star rendering logic with half stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return <FaStar key={i} className="text-yellow-400 inline-block" />;
      } else if (i < rating) {
        return <FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />;
      } else {
        return <FaRegStar key={i} className="text-gray-300 inline-block" />;
      }
    });
  };

  return (
    <div>
      <Product_herosection />

      {/* ✅ Rating Section */}
      <div className="mt-[66px] pl-[44px]">
        <div className="flex items-center text-gray-600 gap-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-gray-500 text-sm ml-2">1,325 Reviews</span>
        </div>
      </div>

      {/* Product Details Grid Layout */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="sm:hidden block text-[24px] font-semibold text-purple-700 mb-[60px]">{product.name}</h2>
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          <div className="w-full">
            {/* Main Product Image */}
            <div className="bg-gray-100 rounded-[42px] w-[328px] h-[327px] sm:w-[612px] sm:h-[678px] flex justify-center items-center mx-auto">
              <Image
                src={product.imageGroup}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-full sm:w-[530px] sm:h-[500px] mx-auto object-contain"
              />
            </div>

            {/* Display current product image in variations */}
            <div className="flex gap-4 mt-6 justify-center">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="rounded-[10px] w-[103px] h-[105px] sm:w-[188px] sm:h-[192px] sm:rounded-[42px] overflow-hidden border border-gray-300 shadow-sm"
                >
                  <Image
                    src={product.image}
                    alt={`Sample ${index + 1}`}
                    width={96}
                    height={96}
                    className={` transition-transform duration-300 ${index === 0
                        ? 'scale-[1.4] w-full h-full'
                        : index === 1
                          ? 'rotate-[30deg] h-[200px] w-auto -translate-y-1/4'
                          : index === 2
                          ? 'rotate-[-25deg] h-[200px] w-auto -translate-y-1/4'
                          : ''
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full">
            <h2 className="sm:block hidden text-[42px] font-semibold text-purple-700 mb-[60px]">{product.name}</h2>
            <h3 className="text-[24px] text-gray-700 mb-4 font-medium">{product.headline}</h3>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {/* Key Features */}
            <h4 className="text-2xl font-medium text-gray-800 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              {product.keyfeatures.map((feature) => (
                <li key={feature.id} className="flex items-center text-gray-600 gap-4">
                  <div className="flex-shrink-0 flex">
                    <Image
                      src={feature.icon}
                      alt={feature.name}
                      width={24}
                      height={24}
                      className="mr-2 w-[40px] h-[40px] md:w-[52px] md:h-[52px]"
                    />
                  </div>
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>

            {/* Coverage */}
            <div className="mt-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Coverage:</h4>
              <div className="flex sm:gap-8 gap-4 flex-col sm:flex-row">
                {product.coverage.map((coverage) => (
                  <div key={coverage.id} className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full hover:bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center hover:text-white border-1 border-[#1210CA] hover:border-none">
                      <span className="text-xl font-bold px-3 sm:px-0">{coverage.id}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold">{coverage.name}</h5>
                      <p className="text-gray-600">{coverage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="container mx-auto px-4 mt-12 mb-16">
        <h3 className="text-[20px] font-semibold text-gray-800 mb-6">Other Products</h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {productsData
            .filter((item) => item.id !== parseInt(id))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map((item, i) => (
              <div
                key={item.id}
                className={`${i === 0 ? 'w-full lg:col-span-2' : ''}`}
              >
                <Link href={`/products/${item.id}`} passHref>
                  <div className="relative h-[310px] rounded-[24px] overflow-hidden bg-gray-100">
                    <div className="flex items-center justify-end w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={320}
                        height={240}
                        className={`${i === 0
                            ? 'rotate-[-25deg] h-[500px] w-[512px] translate-x-1/3 -translate-y-1/4'
                            : 'h-[330px] w-[333px] translate-x-1/4 translate-y-11'
                          }`}
                      />
                    </div>
                    <div className="absolute bottom-6 left-4 flex items-center justify-between gap-2">
                      <div className="bg-white text-sm px-4 h-[48px] py-2 rounded-full font-medium text-gray-700 shadow-md flex items-center justify-center">
                        {item.name}
                      </div>
                      <div className="w-[48px] h-[48px] rounded-full bg-[#0000004b] flex items-center justify-center border border-white shadow-md">
                        <img
                          src="/assets/products_Img/ArrowProduuct.svg"
                          alt="arrow"
                          className="w-[12px] h-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      <TouchWithUs />
    </div>
  );
};

export default ProductD;
