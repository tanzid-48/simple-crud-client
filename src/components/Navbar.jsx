"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn, UserPlus, LogOut } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Users", path: "/users" },
  { name: "Add User", path: "/add-user" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Function to close menu
  const handleClose = () => setOpen(false);

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-black font-black text-xl italic">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              My<span className="text-yellow-400">App</span>
            </span>
          </Link>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden md:flex items-center justify-center flex-1 px-10">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors hover:text-yellow-400 ${
                    isActive(link.path) ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons (End) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {user ? (
              <button
                onClick={() => setUser(null)}
                className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              >
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium hover:text-yellow-400">Login</Link>
                <Link
                  href="/signup"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-1.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-yellow-400/20"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-b border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleClose} // This closes the menu on click
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path) ? "bg-gray-800 text-yellow-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-800 space-y-3">
                {user ? (
                  <button onClick={() => { setUser(null); handleClose(); }} className="w-full py-3 bg-red-500 text-white rounded-md font-bold">Logout</button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/login" onClick={handleClose} className="flex items-center justify-center bg-gray-800 py-3 rounded-md font-medium text-white">Login</Link>
                    <Link href="/signup" onClick={handleClose} className="flex items-center justify-center bg-yellow-400 text-black py-3 rounded-md font-bold">Signup</Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;