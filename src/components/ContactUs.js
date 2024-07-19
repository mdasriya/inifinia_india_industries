
import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import axios from 'axios';
import Transition from './Transition';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const handleToast= () => {
  toast.success("Details Add Sucessfully")
  
};

function ContactUs() {
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] =useState(false)


  const [formData, setFormData] = useState({
    fullname:'',
    street:'',
    phoneNumber: '',
    email: '',
    message: '',
    partnerType:'',
    productInterest:''
  });
  let scriptURL = "https://docs.google.com/spreadsheets/d/1EOZMdmMSvfrzr7eBxe371tPOF3KQ6LkHYEHFgdSAXwM/edit?gid=0#gid=0"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();

     axios.post("https://docs.google.com/spreadsheets/d/1EOZMdmMSvfrzr7eBxe371tPOF3KQ6LkHYEHFgdSAXwM/edit?gid=0#gid=0", formData)
    .then((res)=> {
     handleToast()
    setLoading(false)
    })
 .catch((err)=>{
  console.log(err.message)
  setLoading(false)
 })
    setFormData({
      fullname:'',
      street:'',
      phoneNumber: '',
      email: '',
      message: '',
    partnerType:'',
    productInterest:''
    });
  };
  const [partnerInterest, setPartnerInterest] = useState(null);

  const handlePartnerInterestChange = (event) => {
    setPartnerInterest(event.target.value);
  };

 
 const handleSubmit2 = async () => {
      setLoading(true)
      try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
        console.log('Success!', response);
        handleToast();
        setLoading(false)
      } catch (error) {
        console.error('Error!', error.message);
        setLoading(false)
      }
    };
const form = document.forms['submit-to-google-sheet']
console.log("formData",formData);
  return (
    // <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 con-bg">
    //   <div
    //     className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    //       style={{
    //         clipPath:
    //           'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    //       }}
    //     />
    //   </div>
    //   <div className="mx-auto max-w-2xl text-center">
    //     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
    //     <p className="mt-2 text-lg leading-8 text-gray-600">
    //     We'd love to hear from you! Whether you have questions about our products or need assistance with an order, our team is here to help.
    //     </p>
    //   </div>
    //   <form name='submit-to-google-sheet' action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
    //     <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    //       <div>
    //         <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900" >
    //           First name
    //         </label>
    //         <div className="mt-2.5">
    //           <input
    //             type="text"
    //             name="firstName" value={formData.firstName} onChange={handleChange}
    //             id="first-name"
    //             autoComplete="given-name"
    //             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900" >
    //           Last name
    //         </label>
    //         <div className="mt-2.5">
    //           <input
    //             type="text"
    //             name="lastName" value={formData.lastName} onChange={handleChange}
    //             id="last-name"
    //             autoComplete="family-name"
    //             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900" >
    //           Company
    //         </label>
    //         <div className="mt-2.5">
    //           <input
    //             type="text"
    //             name="company" value={formData.company} onChange={handleChange}
    //             id="company"
    //             autoComplete="organization"
    //             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900" 
          
    //         >
    //           Email
    //         </label>
    //         <div className="mt-2.5">
    //           <input
    //             type="email"
    //             name="email" value={formData.email} onChange={handleChange}
    //             id="email"
    //             autoComplete="email"
    //             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
    //           Phone number
    //         </label>
    //         <div className="relative mt-2.5">
    //           <div className="absolute inset-y-0 left-0 flex items-center">
    //             <label htmlFor="country" className="sr-only">
    //               Country
    //             </label>
    //             <select
    //               id="country"
    //               name="country"
    //               className="h-full border-0 rounded-md  bg-transparent bg-none py-0 pl-4 pr-5 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
    //             >
    //               <option>IN</option>
                 
    //             </select>
               
    //           </div>
    //           <input
    //             type="tel"
    //             name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
    //             id="phone-number"
    //             autoComplete="tel"
    //             className="block w-full rounded-md border-0  py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //           />
    //         </div>
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
    //           Message
    //         </label>
    //         <div className="mt-2.5">
    //           <textarea
    //             name="message"
    //             value={formData.message} onChange={handleChange}
    //             id="message"
    //             rows={4}
    //             className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             defaultValue={''}
    //           />
    //         </div>
    //       </div>
    //       <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
    //         <div className="flex h-6 items-center">
    //           <Switch
    //             checked={agreed}
    //             onChange={setAgreed}
    //             className={classNames(
    //               agreed ? 'bg-indigo-600' : 'bg-gray-200',
    //               'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    //             )}
    //           >
    //             <span className="sr-only">Agree to policies</span>
    //             <span
    //               aria-hidden="true"
    //               className={classNames(
    //                 agreed ? 'translate-x-3.5' : 'translate-x-0',
    //                 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
    //               )}
    //             />
    //           </Switch>
    //         </div>
    //         <Switch.Label className="text-sm leading-6 text-gray-600">
    //           By selecting this, you agree to our{' '}
    //           <a href="#" className="font-semibold text-indigo-600">
    //             privacy&nbsp;policy
    //           </a>
    //           .
    //         </Switch.Label>
    //       </Switch.Group>
    //     </div>
    //     <div className="mt-10">
    //       <button 
    //         type="submit"
    //         className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       >
    //      {loading ? "please wait..." : "Submit"}  
    //       </button>
      
    //     </div>
    //   </form>
    //   <ToastContainer position="bottom-center" style={{zIndex: 9999}} />
    // </div>

<div className=''>
    <div class="grid md:grid-cols-3 items-start gap-4 max-md:gap-12 max-w-6xl mx-auto py-6 bg-white font-[sans-serif] mt-[30px] mb-[30px]">
      <div class="px-6">
        <h2 class="text-gray-800 text-2xl font-semibold ">Contact Information</h2>

        <div class="space-y-8 mt-8">
          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 32 32">
                <path d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z" data-original="#000000" />
                <path d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z" data-original="#000000" />
              </svg>
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Chat to us</h4>
              <p class="text-xs mt-1">Chat with our team to help.</p>
              <p class="text-sm mt-4 hover:text-yellow-600 cursor-pointer">care@infiniaindia.com</p>
            </div>
          </div>

          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 512 512">
                <path d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z" data-original="#000000" />
                <path d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z" data-original="#000000" />
              </svg>
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Visit us</h4>
              <p class="text-xs mt-1">Visit our office HQ.</p>
              <p class="text-sm mt-4 hover:text-yellow-600 cursor-pointer">Infinia House, 4Th Floor, Near Indora, Kamptee Rd, Nagpur, Maharashtra 440017</p>
            </div>
          </div>

          <div class="flex">
            <div class="w-8 h-8 flex items-center shrink-0 rounded border p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 473.806 473.806">
                <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" data-original="#000000" />
              </svg>
            </div>

            <div class="ml-4">
              <h4 class="text-gray-800 text-base font-semibold">Call us</h4>
              {/* <p class="text-xs mt-1">Monday to Friday.</p> */}
              <p class="text-sm mt-4 hover:text-yellow-600 cursor-pointer">07875577000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-3xl md:col-span-2 p-8">
      <h2 className="text-2xl text-[#ef9f42] font-semibold mt-[40px]">Product or Service Inquiry</h2>
      <p className="text-sm text-gray-300 mt-4 leading-relaxed">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
      <form >
        <div className="space-y-4 mt-8">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone No."
            value={formData.phoneNumber}
            onChange={handleChange}
            className="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
          />
          <textarea
            name="message"
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
            className="px-2 pt-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
          ></textarea>
          <div className="px-2 py-3 bg-transparent text-gray-400 font-medium w-full text-sm">
            <label>Are you interested in partnering with INFINIA?</label>
            <div className="mt-10">
              <input
                type="radio"
                id="yes"
                name="partner"
                value="yes"
                className="mr-2"
                onChange={handlePartnerInterestChange}
              />
              <label htmlFor="yes" className="mr-4">Yes</label>
              <input
                type="radio"
                id="no"
                name="partner"
                value="no"
                className="mr-2"
                onChange={handlePartnerInterestChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {partnerInterest === 'yes' && (
            <>
              <label htmlFor="partnerType" className="text-sm text-gray-400">Select Type:</label>
              <div className="px-2 py-3 text-gray-200 font-medium w-full text-sm">
                <select
                  id="partnerType"
                  name="partnerType"
                  value={formData.partnerType}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border-none text-gray-200 focus:outline-none p-2"
                >
                  <option value="dealer">Dealer</option>
                  <option value="distributor">Distributor</option>
                  <option value="businessAssociate">Business Associate</option>
                </select>
              </div>
            </>
          )}
          {partnerInterest === 'no' && (
            <div className="px-2 py-3 bg-transparent text-gray-400 font-medium w-full text-sm">
              <label htmlFor="productInterest">Which products are you interested in?</label>
              <input
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                type="text"
                className="px-2 py-3 bg-transparent text-gray-200 font-medium w-full text-sm border-b border-gray-400 focus:border-yellow-600 outline-none"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit2}
          className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-4 py-2.5 text-gray-800 bg-yellow-600 hover:bg-yellow-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="currentColor"
            className="mr-3"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fillRule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clipRule="evenodd"
            />
          </svg>
          Send Message
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}
export default Transition(ContactUs)
