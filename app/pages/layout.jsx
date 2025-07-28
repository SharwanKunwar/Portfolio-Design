// app/layout.jsx
import Image from 'next/image';
import Link from 'next/link';
import { Home, Info, Phone, FileText, Folder } from 'lucide-react';



export default function RootLayout({ children }) {

  return (
    <>
        <div className="bg-black w-screen h-screen flex gap-1 p-10">
          {/* Sidebar */}
          <div className="w-[20%] h-full flex flex-col gap-0 p-0">
            {/* Profile Section */}
            <div className=" text-white w-full h-[300px] flex justify-center items-center p-3  flex-col rounded-t">
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex justify-center items-center">
                <Image src="/profile.jpg" alt="img" width={70} height={70} />
              </div>
              <div className=' w-full text-center mt-3'>
                <h1 className='font-bold'>Sharwan jung kunwar</h1>
                <h2 className='text-[15px] '>Web Developer</h2>
              </div>
              
              
            </div>

            {/* Navigation */}
                <div className=" w-full h-full rounded-b">
                  <ul className="flex flex-col gap-5 py-5 w-full items-center">
                    <li className="pl-3 w-[70%] h-[40px] flex justify-start items-center rounded hover:bg-indigo-400 gap-2 text-white">
                      <Home className="w-5 h-5" />
                      <Link href="/pages/home">Home</Link>
                    </li>
                    <li className="pl-3 w-[70%] h-[40px] flex justify-start items-center rounded hover:bg-indigo-400 gap-2 text-white">
                      <Folder className="w-5 h-5" />
                      <Link href="/pages/projects">Projects</Link>
                    </li>
                    <li className="pl-3 w-[70%] h-[40px] flex justify-start items-center rounded hover:bg-indigo-400 gap-2 text-white">
                      <Info className="w-5 h-5" />
                      <Link href="/pages/about">About</Link>
                    </li>
                    <li className="pl-3 w-[70%] h-[40px] flex justify-start items-center rounded hover:bg-indigo-400 gap-2 text-white">
                      <Phone className="w-5 h-5" />
                      <Link href="/pages/contact">Contact</Link>
                    </li>
                    <li className="pl-3 w-[70%] h-[40px] flex justify-start items-center rounded hover:bg-indigo-400 gap-2 text-white">
                      <FileText className="w-5 h-5" />
                      <Link href="/pages/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>


            {/* Tech Stack */}
            
          </div>

          {/* Main Content */}
          <div className="w-[80%]  h-full  p-0 overflow-y-auto overflow-x-hidden hide-scrollbar">

            <div className=" w-full h-full flex flex-col justify-start items-start  p-0 relative ">
              {children}
            </div>
          </div>
        </div>
    </>
  );
}
