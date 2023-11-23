"use client"
import Navbar from '@/components/Navbar/Navbar'
import Homeslider from '@/components/Homeslider/Homeslider'
import CategoriesSlider from '@/components/Categories/CategoriesSlider'
import BlogsSlider from '@/components/blogcards/BlogsSlider'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homeslider/>
      <CategoriesSlider/>
      <BlogsSlider/>
      <Footer/>
    </main>
  )
}
