'use client'

import { useState } from 'react'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function WomenPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Elegant Silk Blouse',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      category: 'Tops',
      isOnSale: true,
      rating: 4.8,
      colors: ['White', 'Black', 'Navy']
    },
    {
      id: 2,
      name: 'Floral Summer Dress',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      category: 'Dresses',
      isOnSale: true,
      rating: 4.7,
      colors: ['Floral', 'Blue', 'Pink']
    },
    {
      id: 3,
      name: 'High-Waisted Jeans',
      price: 79.99,
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
      category: 'Bottoms',
      isOnSale: false,
      rating: 4.9,
      colors: ['Blue', 'Black', 'Gray']
    },
    {
      id: 4,
      name: 'Cashmere Cardigan',
      price: 199.99,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      category: 'Knitwear',
      isOnSale: false,
      rating: 4.8,
      colors: ['Cream', 'Camel', 'Gray']
    },
    {
      id: 5,
      name: 'Business Blazer',
      price: 159.99,
      originalPrice: 199.99,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      category: 'Outerwear',
      isOnSale: true,
      rating: 4.6,
      colors: ['Black', 'Navy', 'Gray']
    },
    {
      id: 6,
      name: 'Maxi Evening Dress',
      price: 249.99,
      image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
      category: 'Dresses',
      isOnSale: false,
      rating: 4.9,
      colors: ['Black', 'Burgundy', 'Navy']
    }
  ]

  const categories = ['All', 'Tops', 'Dresses', 'Bottoms', 'Outerwear', 'Knitwear']
  const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200']
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900">Women</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Women's Collection</h1>
            <p className="text-gray-600">Elegant styles for every occasion</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded border-gray-300" />
                  <span className="text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center">
                  <input type="checkbox" className="mr-3 rounded border-gray-300" />
                  <span className="text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Size</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="p-2 border border-gray-300 rounded text-sm hover:border-black transition-colors"
                >
                  {size}
                </button>
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
              <option>Newest First</option>
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
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">★ {product.rating}</span>
                    </div>
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() === 'floral' ? '#f9a8d4' : color.toLowerCase() }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}