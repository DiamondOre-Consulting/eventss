import React from 'react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Visual Gallery Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-light">
              Visual <em className="font-serif italic">Gallery</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Journey in Asia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-light">
              Journey in <em className="font-serif italic">Asia</em>
            </h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Large image */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-80 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              </div>
            </div>

            {/* Medium image */}
            <div className="md:col-span-1">
              <div className="h-80 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              </div>
            </div>

            {/* Two small images stacked */}
            <div className="space-y-4">
              <div className="h-36 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1539650116574-75c0c6d2d167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              </div>
              <div className="h-36 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              </div>
            </div>

            {/* Large vertical image */}
            <div>
              <div className="h-80 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
            </div>
            <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
            </div>
            <div className="h-48 bg-cover bg-center rounded-lg shadow-lg relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1539650116574-75c0c6d2d167?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
            </div>
          </div>
        </div>
      </section>

      {/* Journey in Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-light">
              Journey in <em className="font-serif italic">Culture</em>
            </h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="h-96 bg-cover bg-center rounded-lg shadow-lg relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1539650116574-75c0c6d2d167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'}}>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Traditional Art Craft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey in Europe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-light">
              Journey in <em className="font-serif italic">Europe</em>
            </h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1520637836862-4d197d17c952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
            </div>
            <div className="h-80 bg-cover bg-center rounded-lg shadow-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
            </div>
            <div className="h-80 bg-cover bg-center rounded-lg shadow-lg relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'}}>
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Mountain Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <button className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </section>
    </div>
  );
};

export default Gallery;
