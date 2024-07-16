import React from 'react'
import image1 from "../assets/img/1. Terracotta 280 x 286px.jpg"

function Material() {
  return (
    <div class="bg-gray-100 px-6 py-12 font-[sans-serif]">
    <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={image1} alt="Image" class="rounded-md object-cover w-full h-full" />
        </div>
        <div>
          <h2 class="text-3xl font-extrabold text-purple-700 mb-4">Immerse Yourself in Creativity</h2>
          <p class="text-gray-700 text-sm leading-6">
            Unleash your imagination and explore a world of endless possibilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="list-disc text-sm text-gray-700 space-y-2 pl-4 mt-6">
            <li>Discover innovative ideas.</li>
            <li>Create unique projects.</li>
            <li>Collaborate with like-minded individuals.</li>
            <li>Transform your visions into reality.</li>
          </ul>
          <div class="mt-6">
            <a href="javascript:void(0);" class="text-purple-600 text-sm font-semibold hover:underline">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Material