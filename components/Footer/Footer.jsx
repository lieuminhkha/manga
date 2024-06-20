import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ContactLink } from '../constants'
const Footer = () => {
  return (
    <div className='bg-white w-full fixed h-[100px] left-0 bottom-0'>
      <div className='flex-between'>
        <div >
          <span>Giới thiệu về trang web</span>
        </div>
        <div>
          Liên hệ qua
          <span>
            <Link href={ContactLink}>
              {ContactLink}
            </Link>
          </span>              
        </div>
      </div>
    </div>
  )
}

export default Footer
