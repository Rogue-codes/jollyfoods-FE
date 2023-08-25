import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowLeft } from 'iconsax-react';
import Image from 'next/image';
import { Paystack } from '@/assets';
import Link from 'next/link';

interface paymentProps {
  open: true;
  close: () => void;
}
export default function PaymentModal({ open, close }: paymentProps) {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[900]" initialFocus={cancelButtonRef} onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full min-w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-scroll rounded-lg bg-white text-left w-[66.25rem] h-[40rem] shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="w-full px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Link href="/reservation-result">
                        <Dialog.Title className="flex items-center gap-6 text-start justify-start">
                          <ArrowLeft variant='Linear' color='#302929' size="20" />
                          <span className='text-[#302929] text-[32px] font-semibold'>
                            Make Payment
                          </span>
                        </Dialog.Title>
                      </Link>
                      <div className="mt-12 flex flex-col">
                        <div className='first flex flex-col justify-start items-start text-start'>
                          <span className='bg-[#FEFAE1] border-[#D0B61C] text-[#302929] px-2 py-2 border rounded-[14px] text-xl font-normal'>
                            Your order only serves an individual person
                          </span>
                          <span className='text-[#302929] mt-6 text-xl font-semibold'>
                            your order
                          </span>
                          <span className='text-[#302929] mt-7 text-xl font-semibold'>
                            Breakfast Buffet
                          </span>
                          <span className='text-[#302929] mt-2 text-base font-normal'>
                            Fried yam, Fish stew, Orange juice
                          </span>
                        </div>
                      </div>
                      <div className='border border-[#F7F8F7] mt-10'></div>
                      <div className="mt-7 flex flex-col">
                        <div className='first flex flex-col justify-start items-start text-start'>
                          <span className=' text-[#302929] text-xl font-semibold'>
                            How would you like to pay
                          </span>
                          <div className='mt-2 flex gap-4'>
                            <input type="radio" className="text-[#FADB21]" />
                            <div
                              className="flex flex-col items-start justify-start text-start text-[#302929]">
                              <span className='text-xl font-semibold'>Full payment</span>
                              <span className='text-base font-normal'>
                                Make total payment, you only need to present receipt at the restaurant
                              </span>
                            </div>
                          </div>
                          <div className='mt-2 flex gap-4'>
                            <input type="radio" />
                            <div
                              className="flex flex-col items-start justify-start text-start text-[#302929]">
                              <span className='text-xl font-semibold'>
                                Pay part, balance at the restaurant
                              </span>
                              <span className='text-base font-normal'>
                                Make half payment,Balance at the restaurant
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='border border-[#F7F8F7] mt-10'></div>
                      <div className='flex flex-col mt-5'>
                        <span className='text-[#302929] text-xl font-semibold'>
                          Price
                        </span>
                        <div className='flex items-center text-start justify-start gap-28'>
                          <span className='font-semibold mt-3 text-xl text-[#302929]'>
                            N9,600
                            <span className='font-normal ml-3 text-base text-[#302929]'>
                              per Buffets
                            </span>
                          </span>
                          <span className='text-2xl font-normal text-[#2B5F2B]'>x 1</span>
                        </div>
                      </div>
                      <div className='border border-[#F7F8F7] mt-10'></div>
                      <div className='mt-4 flex flex-col items-start justify-start text-center'>
                        <span className='text-[#302929] text-xl font-semibold'>Pay with</span>
                        <div className='w-36 h-20'>
                          <Image src={Paystack} alt="" className='object-cover' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex ml-8 mb-4 w-[10rem] justify-center rounded-2xl bg-[#2B5F2B]  py-3 text-sm font-normal text-white  "
                  onClick={close}
                >
                  Continue
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
