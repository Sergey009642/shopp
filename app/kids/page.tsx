'use client'

import { useState } from 'react'
import { Grid, List, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function KidsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: 13,
      name: 'Rainbow T-Shirt',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
      category: 'T-Shirts',
      isOnSale: true,
      rating: 4.8,
      ageGroup: '3-8 years'
    },
    {
      id: 14,
      name: 'Denim Overalls',
      price: 39.99,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
      category: 'Overalls',
      isOnSale: false,
      rating: 4.7,
      ageGroup: '2-6 years'
    },
    {
      id: 15,
      name: 'Flower Print Dress',
      price: 34.99,
      originalPrice: 44.99,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      category: 'Dresses',
      isOnSale: true,
      rating: 4.9,
      ageGroup: '4-10 years'
    },
    {
      id: 16,
      name: 'Cozy Hoodie',
      price: 32.99,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      category: 'Hoodies',
      isOnSale: false,
      rating: 4.6,
      ageGroup: '5-12 years'
    },
    {
      id: 17,
      name: 'Cargo Shorts',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      category: 'Shorts',
      isOnSale: true,
      rating: 4.5,
      ageGroup: '6-14 years'
    },
    {
      id: 18,
      name: 'Winter Jacket',
      price: 79.99,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      category: 'Outerwear',
      isOnSale: false,
      rating: 4.8,
      ageGroup: '3-12 years'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Kids</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Kids Collection</h1>
            <p className="text-gray-600">Comfortable and playful designs for little ones</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
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

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Age Groups</h3>
            <div className="space-y-2">
              {['0-2 years', '3-5 years', '6-8 years', '9-12 years', '13+ years'].map((age) => (
                <label key={age} className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded border-gray-300" />
                  <span className="text-gray-700">{age}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600">{products.length} products</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Age: Youngest First</option>
              <option>Best Selling</option>
            </select>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  {product.isOnSale && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Sale
                    </div>
                  )}
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-xs text-blue-600 font-medium">{product.ageGroup}</p>
                  </div>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">★ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}