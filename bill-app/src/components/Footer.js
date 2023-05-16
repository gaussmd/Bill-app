import React from 'react'

const Footer = ({ name,email,website,phone,bankName,bankAccount }) => {
  return (
    <>
      <footer className='border-t-2 border-t-300 pt-5'>
        <ul className='flex flex-wrap items-center justify-center'>
        <li><span className='font-bold'>Your Name:</span> {name}
        </li>
        <li><span className='font-bold'>Your Email:</span>{email}
        </li>
        <li><span className='font-bold'>Your Phone:</span>{phone}
        </li>
        <li><span className='font-bold'>Bank:</span> {bankName}
        </li>
        <li><span className='font-bold'>Account Holder:</span>{name}
        </li>
        <li><span className='font-bold'>Account Number:</span>{bankAccount}
        </li>
        <li><span className='font-bold'>Website:</span><a target='-blank' rel='noopenner norefferer' href={website}></a>{website}
        </li>
        <li><span>
        <div className="mb-1">
     Image <span className="font-css top">*</span>
     <div className="">
         <input type="file" id="file-input" name="ImageStyle"/>
     </div>
</div>
          </span></li>
      </ul>
      </footer>
    
    </>
  )
}

export default Footer