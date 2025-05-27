import { FaBriefcase, FaLaptop, FaServer, FaMobileAlt, FaStar, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  const products = {
    all: [
      {
        id: 1,
        name: 'Software Suite',
        category: 'software',
        icon: <FaLaptop className="text-green-500 text-2xl" />,
        description: 'Comprehensive software solutions for your business needs.',
        href: '#'
      },
      {
        id: 2,
        name: 'Cloud Platform',
        category: 'cloud',
        icon: <FaServer className="text-green-500 text-2xl" />,
        description: 'Scalable cloud infrastructure with enterprise security.',
        href: '#'
      },
      {
        id: 3,
        name: 'Mobile Pro',
        category: 'mobile',
        icon: <FaMobileAlt className="text-green-500 text-2xl" />,
        description: 'Native iOS/Android apps with cloud sync.',
        href: '#'
      },
      {
        id: 4,
        name: 'AI Analytics',
        category: 'featured',
        icon: <FaStar className="text-yellow-400 text-2xl" />,
        description: 'Our award-winning analytics platform.',
        href: '#'
      },
      {
        id: 5,
        name: 'Team Collaboration',
        category: 'software',
        icon: <FaLaptop className="text-green-500 text-2xl" />,
        description: 'Real-time collaboration tools for teams.',
        href: '#'
      },
      {
        id: 6,
        name: 'Database Solutions',
        category: 'cloud',
        icon: <FaServer className="text-green-500 text-2xl" />,
        description: 'Managed database services with high availability.',
        href: '#'
      }
    ],
    software: [],
    cloud: [],
    mobile: [],
    featured: []
  };

  // Filter products by category
  products.software = products.all.filter(p => p.category === 'software');
  products.cloud = products.all.filter(p => p.category === 'cloud');
  products.mobile = products.all.filter(p => p.category === 'mobile');
  products.featured = products.all.filter(p => p.category === 'featured');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Sidebar - Desktop */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 pt-20 px-4">
        <div className="space-y-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === 'all' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaBriefcase className="mr-3" />
            All Products
          </button>
          
          <div className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</div>
          
          <button
            onClick={() => setActiveTab('software')}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === 'software' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaLaptop className="mr-3" />
            Software Suite
          </button>
          
          <button
            onClick={() => setActiveTab('cloud')}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === 'cloud' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaServer className="mr-3" />
            Cloud Services
          </button>
          
          <button
            onClick={() => setActiveTab('mobile')}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === 'mobile' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaMobileAlt className="mr-3" />
            Mobile Apps
          </button>
          
          <div className="border-t border-gray-200 my-2"></div>
          
          <button
            onClick={() => setActiveTab('featured')}
            className={`w-full flex items-center px-4 py-3 rounded-lg ${activeTab === 'featured' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <FaStar className="mr-3" />
            Featured Products
          </button>
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden sticky top-0 bg-white z-10 border-b border-gray-200 px-4 py-3">
        <button 
          onClick={toggleMobileMenu}
          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
        >
          <div className="flex items-center">
            <FaBriefcase className="mr-3" />
            {activeTab === 'all' && 'All Products'}
            {activeTab === 'software' && 'Software Suite'}
            {activeTab === 'cloud' && 'Cloud Services'}
            {activeTab === 'mobile' && 'Mobile Apps'}
            {activeTab === 'featured' && 'Featured Products'}
          </div>
          <FaChevronDown className={`transition-transform ${isMobileMenuOpen ? 'transform rotate-180' : ''}`} />
        </button>
        
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white rounded-lg shadow-lg py-1 border border-gray-200">
            <button
              onClick={() => { setActiveTab('all'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              All Products
            </button>
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Solutions</div>
            <button
              onClick={() => { setActiveTab('software'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Software Suite
            </button>
            <button
              onClick={() => { setActiveTab('cloud'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Cloud Services
            </button>
            <button
              onClick={() => { setActiveTab('mobile'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Mobile Apps
            </button>
            <div className="border-t border-gray-200 my-1"></div>
            <button
              onClick={() => { setActiveTab('featured'); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              Featured Products
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`pt-16 pb-12 ${isDesktop ? 'pl-64' : 'px-4'}`}>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {activeTab === 'all' && 'Our Products'}
              {activeTab === 'software' && 'Software Suite'}
              {activeTab === 'cloud' && 'Cloud Services'}
              {activeTab === 'mobile' && 'Mobile Applications'}
              {activeTab === 'featured' && 'Featured Products'}
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              {activeTab === 'all' && 'Explore our complete range of solutions'}
              {activeTab === 'software' && 'Powerful tools to streamline your business'}
              {activeTab === 'cloud' && 'Reliable infrastructure for your applications'}
              {activeTab === 'mobile' && 'Beautiful apps for your mobile workforce'}
              {activeTab === 'featured' && 'Our most innovative and popular solutions'}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products[activeTab].map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h2 className="ml-3 text-xl font-semibold text-gray-800">{product.name}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <a
                    href={product.href}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                  >
                    Learn more <FaChevronRight className="ml-1 text-xs" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {products[activeTab].length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;