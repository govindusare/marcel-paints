import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { productsData } from '@/lib/data';
import TouchWithUs from '@/components/home/TouchWithUs';
import Link from 'next/link';

const ProductD = async ({ params }) => {
  const { id } = await params;
  const product = productsData.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const ProductSection = () => (
    <div className="rounded-[42px] w-full mt-[40px]">
      <div
        className="text-gray-900 h-[320px] bg-cover bg-center"
        style={{ backgroundImage: `url('/Mask group.svg')` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[72px] md:text-6xl font-bold mb-4 pt-[100px]">Wide product range</h1>
          <p className="text-xl md:text-2xl mb-6">Everything You Need to Fortify Your Infrastructure</p>
        </div>
      </div>
    </div>
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`inline-block ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div>
      <ProductSection />

      {/* Price and Rating */}
      <div className="mt-[66px] pl-[44px]">
        <div className="flex items-center text-gray-600">
          <div className="mr-2">{renderStars(product.rating)}</div>
          <span>{product.rating} / 5</span>
        </div>
      </div>

      {/* Product Details Grid Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Details */}
          <div className="w-full">
            <h2 className="text-[42px] font-semibold text-purple-700 mb-[60px]">{product.name}</h2>
            <h3 className="text-[24px] text-gray-700 mb-4 font-medium">{product.headline}</h3>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            {/* Key Features */}
            <h4 className="text-2xl font-medium text-gray-800 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              {product.keyfeatures.map((feature) => (
                <li key={feature.id} className="flex items-center text-gray-600 gap-4">
                  <div className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] flex-shrink-0 flex items-center justify-center border rounded-2xl">
                    <Image
                      src={feature.icon}
                      alt={feature.name}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                  </div>
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>

            {/* Coverage */}
            <div className="mt-6">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Coverage:</h4>
              <div className="flex gap-8">
                {product.coverage.map((coverage) => (
                  <div key={coverage.id} className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
                      <span className="text-xl font-bold">{coverage.id}</span>
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

          {/* Product Image + Sample Images */}
          <div className="w-full">
            {/* Main Product Image */}
            <div className="bg-gray-100 rounded-[42px] w-[612px] h-[678px] flex justify-center items-center mx-auto">
              <Image
                src={product.imageGroup}
                alt={product.name}
                width={600}
                height={400}
                className="w-[530px] h-[500px] mx-auto object-contain"
              />
            </div>

            {/* ✅ Display current product image in variations */}
            <div className="flex gap-4 mt-6 justify-center">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="w-[188px] h-[192px] rounded-[42px] overflow-hidden border border-gray-300 shadow-sm"
                >
                  <Image
                    src={product.image}
                    alt={`Sample ${index + 1}`}
                    width={96}
                    height={96}
                    className={`object-cover w-full h-full transition-transform duration-300 ${
                      index === 0
                        ? 'scale-[1.4]'
                        : index === 1
                        ? 'rotate-[30deg]'
                        : 'rotate-[-25deg]'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Other Products Section */}
      <div className="container mx-auto px-4 mt-12 mb-16 w-[3156px] h-[387px]">
        <h3 className="text-[20px] font-semibold text-gray-800 mb-6">Other Products</h3>
        <div className="grid grid-cols-4 gap-6 overflow-x-auto">
          {productsData
            .filter((item) => item.id !== parseInt(id))
            .slice(0, 3)
            .map((item, i) => (
              <div key={item.id} className={`${i === 0 ? 'col-span-2' : ''}`}>
                <Link href={`/products/${item.id}`} passHref>
                  <div className="relative h-[310px] rounded-[24px] overflow-hidden bg-gray-100">
                    <div className="flex items-center justify-end w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={320}
                        height={240}
                        className={`${
                          i === 0
                            ? 'rotate-[-25deg] h-[500px] w-[512px] translate-x-1/3 -translate-y-1/4'
                            : 'h-[330px] w-[333px] translate-x-1/4'
                        }`}
                      />
                    </div>
                    <div className="absolute bottom-6 left-4 bg-white px-4 py-2 rounded-full flex items-center justify-between gap-2 shadow-md">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <div className="w-[24px] h-[24px] rounded-full bg-gray-800 text-white text-xs flex items-center justify-center">
                        →
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
