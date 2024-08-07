import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { dressPage1 } from "../../../data/dress/page1";
import MainProductCard from "./MainProductCard";
import { filter, singleFilters } from "../../../data/filter";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainProductList() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const handleFilter = (value, sectionId) => {
    let searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);
    if (filterValue.length === 0) {
      filterValue.push(value);
    }
    console.log(filterValue);
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button "
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>

                {filter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  max-w-7xl px-0 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 py-6 px-3 ">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
              rimanshu
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="grid grid-cols-1 lg:grid-cols-4 pb-24 pt-6"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="w-0 sm:w-0 lg:w-52 col-span-1">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                {filter.map((section) => (
                  <div key={section.id} as="div">
                    <h3 className="-my-3 flow-root">
                      <div className="py-2 flex w-full items-center justify-between bg-white  border-b border-gray-200 uppercase ">
                        <span>
                          <label className="text-sm font-medium tracking-wide">
                            {section.name}
                          </label>
                        </span>
                      </div>
                    </h3>
                    <div className="py-6">
                      <div className="">
                        <FormControl>
                          {section.options.map((option, optionIdx) => (
                            <FormControlLabel
                              value={option.value}
                              control={
                                <Checkbox
                                  sx={{
                                    color: "black",
                                    "&.Mui-checked": {
                                      color: "black",
                                    },
                                  }}
                                />
                              }
                              label={option.label}
                              onChange={() =>
                                handleFilter(option.value, section.id)
                              }
                            />
                          ))}
                        </FormControl>
                      </div>
                    </div>
                  </div>
                ))}

                {singleFilters.map((section) => (
                  <div key={section.id} as="div">
                    <h3 className="-my-3 flow-root">
                      <div className="py-2 flex w-full items-center justify-between bg-white  border-b border-gray-200 uppercase ">
                        <span>
                          <label className="text-sm font-medium tracking-wide">
                            {section.name}
                          </label>
                        </span>
                      </div>
                    </h3>
                    <div className="py-6">
                      <div className="">
                        <FormControl>
                          {section.options.map((option, optionIdx) => (
                            <FormControlLabel
                              value={option.value}
                              control={
                                <Checkbox
                                  sx={{
                                    color: "black",
                                    "&.Mui-checked": {
                                      color: "black",
                                    },
                                  }}
                                />
                              }
                              label={option.label}
                            />
                          ))}
                        </FormControl>
                      </div>
                    </div>
                  </div>
                ))}
              </form>
            </div>
            {/* Product grid */}
            <ul className="lg:col-span-3 w-full">
              <div className="grid grid-cols-2 lg:grid-cols-3">
                {dressPage1.map((items) => (
                  <MainProductCard data={items} />
                ))}
              </div>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
