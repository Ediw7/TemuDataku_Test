import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

function DetailKatalog() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchProduct();
  }, [id]);

  if (error) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-md mx-auto text-center">
        {error}
      </div>
    </div>
  );
  if (!product) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-gray-600 text-center">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-6 bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition duration-300"
        >
          Kembali ke Katalog
        </button>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-80 object-cover rounded-md mb-6"
          />
          <h2 className="text-3xl font-extrabold text-green-600 mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-green-600">
            Rp {product.price.toLocaleString('id-ID')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailKatalog;