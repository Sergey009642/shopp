'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Categories() {
  const categories = [
    {
      name: 'Women',
      href: '/women',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
      description: 'Elegant styles for every occasion'
    },
    {
      name: 'Men',
      href: '/men',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Modern classics and contemporary fits'
    },
    {
      name: 'Kids',
      href: '/kids',
      image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
      description: 'Comfortable and playful designs'
    },
    {
      name: 'Sportswear',
      href: '/sportswear',
      image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
      description: 'Performance meets style'
    },
    {
      name: 'Accessories',
      href: '/accessories',
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
      description: 'Complete your perfect look'
    },
    {
      name: 'Footwear',
      href: '/footwear',
      image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg',
      description: 'Step out in style'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-200 mb-4 opacity-90">
                  {category.description}
                </p>
                <div className="inline-flex items-center text-white font-semibold group-hover:text-gray-200 transition-colors">
                  View Collection
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}