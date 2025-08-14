'use client'

import { useState } from 'react'
import { Clock, Grid, List, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function SalesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const saleProducts = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      category: 'Women',
      discount: 25,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Summer Dress',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      category: 'Women',
      discount: 20,
      rating: 4.7
    },
    {
      id: 3,
      name: 'Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      category: 'Men',
      discount: 25,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Wool Sweater',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      category: 'Men',
      discount: 19,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      category: 'Accessories',
      discount: 20,
      rating: 4.9
    },
    {
      id: 6,
      name: 'Rainbow T-Shirt',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
      category: 'Kids',
      discount: 17,
      rating: 4.8
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl p-8 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Flash Sale Event
          </h1>
          <p className="text-xl mb-6 opacity-90">
            Limited time offer! Up to 50% off on selected items. Don't miss out on these amazing deals.
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6" />
              <div>
                <p className="text-sm opacity-75">Sale ends in</p>
                <p className="text-2xl font-bold">2 days 14:32:18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Sales</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sale Items</h2>
            <p className="text-gray-600">Discover amazing deals on premium fashion</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''} hover:bg-gray-50 transition-colors`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''} hover:bg-gray-50 transition-colors`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">{saleProducts.length} sale items</p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
            <option>Sort by: Discount %</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Selling</option>
          </select>
        </div>

        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {saleProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  -{product.discount}%
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </div>
                <Link href={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">
                      ★ {product.rating}
                    </span>
                  </div>
                </div>
                
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gray-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Don't Miss Future Sales!
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Be the first to know about our exclusive sales, new arrivals, and special offers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}