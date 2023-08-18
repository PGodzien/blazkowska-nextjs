"use client";
import React from "react";
import Image from "next/image";
import blazkowskaLogo from "..//..//public/logo-blazkowska.png";
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Nav = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <section className="bg-primary text-white font-sans">
            <div className="container mx-auto overflow-hidden">
                <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
                    <div className="w-auto mr-14">
                        <Link href="/">
                            <Image alt="" src={blazkowskaLogo} className="h-auto w-40" />
                        </Link>
                    </div>
                    <div className="w-auto hidden lg:block">
                        <ul className="flex items-end mr-16">
                            <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/">Start</Link></li>
                            <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/oferta/">Oferta</Link></li>
                            <li className="mr-9 font-medium hover:text-secondary font-sans text-xl whitespace-nowrap"><Link href="/o-nas/">O nas</Link></li>
                            <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/salony/">Salony</Link></li>
                            <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/kontakt/">Kontakt</Link></li>
                            <div className="w-full md:w-1/3 flex justify-center">
                                <div className="flex md:space-x-2 mx-auto">
                                    <Link
                                        href="https://www.instagram.com/blazkowscy_and_barberroom/"
                                        target="blank"
                                        className=""
                                    >
                                        <svg
                                            className='w-8 h-auto'
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="24" height="24" fill="#333333"></rect>
                                            <path
                                                d="M15.6377 3H8.3623C5.40551 3 3 5.40551 3 8.3623V15.6377C3 18.5945 5.40551 21 8.3623 21H15.6377C18.5945 21 21 18.5945 21 15.6377V8.3623C21 5.40551 18.5945 3 15.6377 3ZM19.1892 15.6377C19.1892 17.5991 17.5991 19.1892 15.6377 19.1892H8.3623C6.40088 19.1892 4.8108 17.5991 4.8108 15.6377V8.3623C4.8108 6.40084 6.40088 4.8108 8.3623 4.8108H15.6377C17.5991 4.8108 19.1892 6.40084 19.1892 8.3623V15.6377Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M11.9997 7.34449C9.43269 7.34449 7.34426 9.43291 7.34426 11.9999C7.34426 14.5669 9.43269 16.6553 11.9997 16.6553C14.5667 16.6553 16.6551 14.5669 16.6551 11.9999C16.6551 9.43288 14.5667 7.34449 11.9997 7.34449ZM11.9997 14.8446C10.4286 14.8446 9.15506 13.571 9.15506 11.9999C9.15506 10.4289 10.4287 9.15529 11.9997 9.15529C13.5708 9.15529 14.8443 10.4289 14.8443 11.9999C14.8443 13.571 13.5707 14.8446 11.9997 14.8446Z"
                                                fill="white"
                                            ></path>
                                            <path
                                                d="M16.6645 8.495C17.2806 8.495 17.7801 7.99555 17.7801 7.37946C17.7801 6.76336 17.2806 6.26392 16.6645 6.26392C16.0484 6.26392 15.549 6.76336 15.549 7.37946C15.549 7.99555 16.0484 8.495 16.6645 8.495Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/studio.blazkowska/"
                                        target="blank"
                                        className=""
                                    >
                                        <svg
                                            className='w-8 h-auto'
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="24" height="24" fill="#333333"></rect>
                                            <path
                                                d="M18.5753 3H5.42651C4.08695 3 3.00098 4.08593 3.00098 5.42554V18.5744C3.00098 19.914 4.08691 20.9999 5.42651 20.9999H11.9114L11.9225 14.5677H10.2514C10.0342 14.5677 9.85795 14.3921 9.85712 14.1749L9.8491 12.1016C9.84827 11.8832 10.0251 11.7058 10.2434 11.7058H11.9115V9.70238C11.9115 7.37746 13.3314 6.11152 15.4054 6.11152H17.1072C17.325 6.11152 17.5015 6.28805 17.5015 6.50583V8.2541C17.5015 8.4718 17.3251 8.64828 17.1074 8.64841L16.063 8.6489C14.9351 8.6489 14.7167 9.18486 14.7167 9.97142V11.7058H17.1951C17.4313 11.7058 17.6145 11.912 17.5866 12.1465L17.3409 14.2199C17.3174 14.4183 17.1491 14.5678 16.9494 14.5678H14.7278L14.7167 21H18.5754C19.9149 21 21.0008 19.9141 21.0008 18.5745V5.42554C21.0008 4.08593 19.9149 3 18.5753 3Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <div className="w-auto lg:hidden">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto">
                                <button className="" type="button" onClick={openModal}>
                                    <svg className="navbar-burger text-black" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                        <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-50" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                                                <div className="flex flex-wrap justify-between h-full">
                                                    <div className="w-full">
                                                        <div className="flex items-center justify-between -m-2">
                                                            <div className="w-auto p-2">
                                                                <Link className="inline-block focus:outline-none" href="/">
                                                                    <Image alt="" src={blazkowskaLogo} className="h-auto w-56" />
                                                                </Link>
                                                            </div>
                                                            <div className="w-auto p-2">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex bg-gray-50 rounded-full p-4 justify-center underline underline-offset-8 focus:outline-none text-sm"
                                                                    onClick={closeModal}
                                                                >
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-center py-16 w-full text-2xl">
                                                        <ul>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/">Start</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/oferta/">Oferta</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/o-nas/">O nas</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/salony/">Salony</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/kontakt/">Kontakt</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </section>

    );
};

export default Nav;
