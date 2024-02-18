import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Hedex Bot", href: "#bot" },
        { name: "Premium Bot", href: "#premium" },
        { name: "$HEDEX", href: "#token" },
        { name: "Tokenomics", href: "#tokenomics" },
    ];
    //    const navi = useNavigate();

    return (
        <header className="fixed shadow-xl inset-x-0 top-0 z-50 bg-sec text-gray-400">
            <nav
                className="flex items-center justify-between p-6 lg:px-8 container mx-auto"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="w-[50px]"
                            src="/asset/logo.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-600 btn bg-grad p-2 rounded-lg"
                    //   onClick={() => navi("/auth/login")}
                    >
                        Documentation <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-sec px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="w-[50px]"
                                src="/asset/logo.png"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-400/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-gray-100 hover:bg-grad"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="mx-3 btn bg-pri bg-grad text-center  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-900"
                                >
                                    Documentation
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}