
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SignInButton from "../SignInButton";
import Logo from "/public/logo.svg";



export default function Header() {
  const router = useRouter();
  
  return (
    
      <header className="w-full h-20 bg-gray-900
                      border-solid border-b border-gray-800
                      text-gray-300
                     ">
           <div className="max-w-screen-lg h-full my-0 mx-auto py-0 px-8
                          flex items-center justify-between
            ">
              

              <nav className="flex items-center gap-7">

              <Image src={Logo} alt="logo-devboost"
                    className=" mr-20" />

                <Link /* onClick={()=> setActive(router.pathname) } */ 
                href="/" 
                className={
                  router.pathname === '/' ? 
                  `
                  h-20 leading-[5rem] 
                  inline-block px-2 hover:text-white duration-200 relative 
                  after:content-[''] after:h-[3px] after:w-full after:absolute
                  after:bottom-0 after:left-0 after:bg-yellow-400 after:rounded-t-[3px]
                  after:rounded-r-[3px] font-bold 
                  ` : 
                  `h-20 leading-[5rem] 
                  inline-block px-2 hover:text-white duration-200 relative `}>
                  Home
                </Link>
                <Link /* onClick={()=> setActive(router.pathname)  } */ 
                href="/Posts" 
                className={
                  router.pathname === '/Posts' ? 
                  `
                  h-20 leading-[5rem] 
                  inline-block px-2 hover:text-white duration-200 relative 
                  after:content-[''] after:h-[3px] after:w-full after:absolute
                  after:bottom-0 after:left-0 after:bg-yellow-400 after:rounded-t-[3px]
                  after:rounded-r-[3px] font-bold 
                  ` : 
                  `h-20 leading-[5rem] 
                  inline-block px-2 hover:text-white duration-200 relative `}>
                  Posts
                </Link>
              </nav>

              <SignInButton />

          </div>


      </header>
  )
}