'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            New Spring
            <span className="block text-gray-200">Collection</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-md">
            Discover the latest trends and timeless classics. Up to 50% off on selected items.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 group"
            >
              Shop Now
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/sales"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}