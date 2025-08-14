'use client'

import { useState } from 'react'
import { Filter, Grid, List, SlidersHorizontal, ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      category: 'Women',
      rating: 4.8,
      isOnSale: true,
      colors: ['White', 'Black', 'Navy']
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 159.99,
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
      category: 'Men',
      rating: 4.9,
      isOnSale: false,
      colors: ['Blue', 'Black']
    },
    {
      id: 3,
      name: 'Summer Dress',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      category: 'Women',
      rating: 4.7,
      isOnSale: true,
      colors: ['Floral', 'Blue', 'Pink']
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 129.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      category: 'Footwear',
      rating: 4.8,
      isOnSale: false,
      colors: ['White', 'Black', 'Gray']
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      category: 'Accessories',
      rating: 4.9,
      isOnSale: true,
      colors: ['Black', 'Brown', 'Tan']
    },
    {
      id: 6,
      name: 'Wool Sweater',
      price: 109.99,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      category: 'Men',
      rating: 4.6,
      isOnSale: false,
      colors: ['Gray', 'Navy', 'Black']
    },
    {
      id: 7,
      name: 'Rainbow T-Shirt',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
      category: 'Kids',
      rating: 4.8,
      isOnSale: true,
      colors: ['Rainbow', 'Pink', 'Blue']
    },
    {
      id: 8,
      name: 'Athletic Shorts',
      price: 39.99,
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
      category: 'Sportswear',
      rating: 4.7,
      isOnSale: false,
      colors: ['Black', 'Gray', 'Navy']
    }
  ]

  const categories = ['All', 'Women', 'Men', 'Kids', 'Accessories', 'Footwear', 'Sportswear']
  const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <span className="text-gray-900">All Products</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
            <p className="text-gray-600">Discover our complete collection of premium fashion</p>
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

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">On Sale</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 rounded border-gray-300" />
              <span className="text-gray-700">Sale Items Only</span>
            </label>
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
              <option>Customer Rating</option>
            </select>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  {product.isOnSale && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Sale
                    </div>
                  )}
                  <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all z-10 opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
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
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() === 'floral' ? '#f9a8d4' : color.toLowerCase() }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
                      )}
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