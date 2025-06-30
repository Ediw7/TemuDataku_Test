import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-green-600">
                TemuDataku
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md font-medium hover:bg-green-600 transition duration-300">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-32 px-4">
        <h1 className="text-5xl font-extrabold text-green-600 text-center mb-4">
          Selamat Datang di TemuDataku
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl mb-6">
          Platform untuk belajar data science dengan mentoring dan latihan berbasis dataset nyata.
        </p>
        <p className="text-2xl font-semibold text-green-600 text-center max-w-3xl mb-8">
          Belajar lebih efektif & latihan langsung dari ahlinya
        </p>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Terbaik dalam Mentoring Data Science
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
          Dapatkan bimbingan dari mentor untuk menjawab keraguanmu dalam belajar data science. Khusus untuk kamu yang belajar otodidak, kami memberikan akses 1 on 1 maupun kelompok untuk mentoring dengan harga lebih terjangkau dibandingkan bootcamp.
        </p>
        <Link to="/login">
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300 shadow-md">
            Mulai Belajar
          </button>
        </Link>
        <Link to="/#features" className="mt-4 text-green-600 font-medium hover:underline">
          Lihat Selengkapnya
        </Link>
      </section>

      {/* Mentor Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
            Mentor Kami
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mentor kami berasal dari program Bangkit dengan rata-rata kelulusan nilai A, siap membimbingmu menjadi ahli data science.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">M1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Mentor Profesional</h3>
              <p className="text-gray-600 mt-2">
                Berpengalaman di industri dan lulusan program Bangkit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">M2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Ahli Data Science</h3>
              <p className="text-gray-600 mt-2">
                Spesialis dalam analisis data dan machine learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">M3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Pembimbing Dedikasi</h3>
              <p className="text-gray-600 mt-2">
                Membantu membangun portofolio dengan studi kasus nyata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
            Kuasai Tools di Bidang Data Science
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png"
                alt="NumPy Logo"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">NumPy</h3>
              <p className="text-gray-600 text-center">
                Kuasai pemrosesan data numerik dengan NumPy.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pandas.pydata.org/static/img/pandas.svg"
                alt="Pandas Logo"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Pandas</h3>
              <p className="text-gray-600 text-center">
                Analisis dan manipulasi data dengan Pandas.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Lainnya</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">More Tools</h3>
              <p className="text-gray-600 text-center">
                Pelajari berbagai alat data science lainnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
            Layanan TemuDataku
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                1 on 1 & Group Mentoring
              </h3>
              <p className="text-gray-600">
                Dapatkan bimbingan personal atau kelompok dari mentor berpengalaman untuk mempercepat pembelajaranmu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Data Science Practice
              </h3>
              <p className="text-gray-600">
                Bangun portofolio dengan berbagai studi kasus nyata yang bisa kamu eksplorasi dan praktikkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Mulai Perjalanan Data Science-mu Sekarang!
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Tersedia berbagai macam studi kasus yang bisa kamu coba untuk membangun portofolio data science-mu.
        </p>
        <Link to="/register">
          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300 shadow-md">
            Daftar Sekarang
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;