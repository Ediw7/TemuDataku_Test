import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function Dashboard({ setIsAuthenticated }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchProducts();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setIsAuthenticated(false);
      navigate('/login');
    } catch (error) {
      setError(error.message || 'Gagal logout');
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">TemuDataku</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-8">
          Katalog Produk TemuDataku
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6 text-center">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-green-600 mt-3">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;