
import Link from "next/link";
import { HiBars3, HiHome } from 'react-icons/hi2';

import Image from 'next/image';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Team", href: "#team" },
];

export default function Hero() {

  return (
    <div className="bg-white w-full">
      <header className="w-full mx-auto  max-w-screen-lg">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 max-w-screen-lg inset-x-0 top-0 z-10 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 z-20 ">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={"/logo.avif"}
                alt="Logo"
                width={50}
                height={50}
                className="mx-auto object-cover dark:brightness-[0.2] dark:grayscale mix-blend-multiply"
              />
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="lg:hidden">
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900"
                >
                  <span className="sr-only">Your Company</span>
                  <HiHome className="size-6" /> Home
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex lg:gap-x-12 z-20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end z-20">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-8 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our upcoming features.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                Post Alert
              </span>{" "}
              a solution with you in mind
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sr-only">
              <span className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">
                Post Alert
              </span>{" "}
              uma solução pensado em você
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Post Alert simplifies the way you receive your letters. Our smart
              notification system keeps you informed about every important piece
              of mail, making letter delivery more efficient and convenient than
              ever.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 sr-only">
              Post Alert simplifica a maneira como você recebe suas cartas.
              Nosso sistema de notificação inteligente mantém você informado
              sobre cada correspondência importante, tornando a entrega de
              cartas mais eficiente e conveniente do que nunca.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
