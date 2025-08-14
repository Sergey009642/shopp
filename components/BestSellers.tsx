'use client'

import { ShoppingCart, Heart } from 'lucide-react'
import Link from 'next/link'

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: 'Classic White Shirt',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      category: 'Women',
      rating: 4.8,
      isOnSale: true
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: 159.99,
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg',
      category: 'Men',
      rating: 4.9,
      isOnSale: false
    },
    {
      id: 3,
      name: 'Summer Dress',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      category: 'Women',
      rating: 4.7,
      isOnSale: true
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: 129.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      category: 'Footwear',
      rating: 4.8,
      isOnSale: false
    },
    {
      id: 5,
      name: 'Leather Handbag',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      category: 'Accessories',
      rating: 4.9,
      isOnSale: true
    },
    {
      id: 6,
      name: 'Wool Sweater',
      price: 109.99,
      image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
      category: 'Men',
      rating: 4.6,
      isOnSale: false
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our customers' favorite picks - trending styles that everyone loves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                <div className="flex items-center justify-between">
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}