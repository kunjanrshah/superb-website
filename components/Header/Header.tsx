"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, companyInfo } from "@/constants/products";

export default function Header() {

  const [showCategories, setShowCategories] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const params = new URLSearchParams();
      params.set("search", searchTerm);
      if (selectedCategory !== "All Category") {
        params.set("category", selectedCategory);
      }
      window.location.href = `/products?${params.toString()}`;
    }
  };

  const handleCategoryClick = (category: string) => {
    setSearchTerm("");
    const params = new URLSearchParams();
    params.set("category", category);
    window.location.href = `/products?${params.toString()}`;
  };

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid px-5 d-none border-bottom d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-4 text-center text-lg-start mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
              <Link href="/about" className="text-muted me-2"> About Us</Link>
              <small> / </small>
              <Link href="/products" className="text-muted mx-2"> Products</Link>
              <small> / </small>
              <Link href="/contact" className="text-muted ms-2"> Contact</Link>
            </div>
          </div>
          <div className="col-lg-4 text-center d-flex align-items-center justify-content-center">
            <small className="text-dark">Call Us:</small>
            <Link href="tel:+919825156789" className="text-muted">{companyInfo.phone}</Link>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
              <div className={`dropdown ${showCurrency ? "show" : ""}`}>
                <Link
                  href="#"
                  className={`dropdown-toggle text-muted me-2 ${showCurrency ? "show" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCurrency(!showCurrency);
                  }}
                  aria-expanded={showCurrency}
                >
                  <small>INR</small>
                </Link>
                <div className={`dropdown-menu rounded ${showCurrency ? "show" : ""}`}>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> USD</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> EUR</Link>
                </div>
              </div>
              <div className={`dropdown ${showLanguage ? "show" : ""}`}>
                <Link
                  href="#"
                  className={`dropdown-toggle text-muted mx-2 ${showLanguage ? "show" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowLanguage(!showLanguage);
                  }}
                  aria-expanded={showLanguage}
                >
                  <small>English</small>
                </Link>
                <div className={`dropdown-menu rounded ${showLanguage ? "show" : ""}`}>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> English</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Hindi</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Gujarati</Link>
                </div>
              </div>
              <div className={`dropdown ${showDashboard ? "show" : ""}`}>
                <Link
                  href="#"
                  className={`dropdown-toggle text-muted ms-2 ${showDashboard ? "show" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDashboard(!showDashboard);
                  }}
                  aria-expanded={showDashboard}
                >
                  <small><i className="fa fa-home me-2"></i> My Dashboard</small>
                </Link>
                <div className={`dropdown-menu rounded ${showDashboard ? "show" : ""}`}>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Login</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Wishlist</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> My Card</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Notifications</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Account Settings</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> My Account</Link>
                  <Link href="#" className="dropdown-item" onClick={(e) => e.preventDefault()}> Log Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 py-4 d-none d-lg-block">
        <div className="row gx-0 align-items-center text-center">
          <div className="col-md-4 col-lg-3 text-center text-lg-start">
            <div className="d-inline-flex align-items-center">
              <Link href="/" className="navbar-brand p-0">
                <h1 className="fs-3 text-primary m-0 fw-bold">
                  <i className="fas fa-weight me-2"></i>Superb Instruments
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 text-center">
            <div className="position-relative ps-4">
              <form onSubmit={handleSearch} className="d-flex border rounded-pill">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3"
                  type="text"
                  placeholder="Search weighing scales..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                  className="form-select text-dark border-0 border-start rounded-0 p-3" 
                  style={{ width: "200px" }}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                   <option value="All Category">All Category</option>
                  {categories.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
                <div className="position-absolute top-50 end-0 translate-middle-y me-5">
                  <button type="submit" className="btn btn-primary rounded-pill py-3 px-4" style={{ border: 0 }}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <Link href="#" className="text-muted d-flex align-items-center justify-content-center me-3">
                <span className="rounded-circle btn-md-square border"><i className="fas fa-random"></i></span>
              </Link>
              <Link href="#" className="text-muted d-flex align-items-center justify-content-center me-3">
                <span className="rounded-circle btn-md-square border"><i className="fas fa-heart"></i></span>
              </Link>
              <Link href="#" className="text-muted d-flex align-items-center justify-content-center">
                <span className="rounded-circle btn-md-square border"><i className="fas fa-shopping-cart"></i></span>
                <span className="text-dark ms-2">₹0.00</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar p-0">
        <div className="row gx-0 bg-primary px-5 align-items-center">
          <div className="col-lg-3 d-none d-lg-block">
            <nav className="navbar navbar-light position-relative" style={{ width: "250px" }}>
              <button
                className="navbar-toggler border-0 fs-4 w-100 px-0 text-start"
                type="button"
                onClick={() => setShowCategories(!showCategories)}
              >
                <h4 className="m-0"><i className="fa fa-bars me-2"></i>All Categories</h4>
              </button>
              <div className={`collapse navbar-collapse rounded-bottom ${showCategories ? "show" : ""}`} id="allCat">
                <div className="navbar-nav ms-auto py-0">
                  <ul className="list-unstyled categories-bars">
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <div className="categories-bars-item">
                          <Link href={`/products?category=${encodeURIComponent(cat.name)}`}>{cat.name}</Link>
                          <span>({cat.count})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <Link href="/" className="navbar-brand d-block d-lg-none">
                <h1 className="fs-4 text-white m-0 fw-bold">
                  <i className="fas fa-weight text-white me-2"></i>Superb Instruments
                </h1>
              </Link>
              <button
                className="navbar-toggler ms-auto"
                type="button"
                onClick={() => setShowNavbar(!showNavbar)}
              >
                <span className="fa fa-bars fa-1x"></span>
              </button>
              <div className={`collapse navbar-collapse ${showNavbar ? "show" : ""}`} id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <Link href="/" className="nav-item nav-link active">Home</Link>
                  <Link href="/about" className="nav-item nav-link">About</Link>
                  <Link href="/products" className="nav-item nav-link">Shop</Link>
                  <div className={`nav-item dropdown ${showPages ? "show" : ""}`}>
                    <Link
                      href="#"
                      className={`nav-link dropdown-toggle ${showPages ? "show" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPages(!showPages);
                      }}
                      aria-expanded={showPages}
                    >
                      Pages
                    </Link>
                    <div className={`dropdown-menu m-0 ${showPages ? "show" : ""}`}>
                      <Link href="/bestseller" className="dropdown-item" onClick={() => setShowPages(false)}>Bestseller</Link>
                      <Link href="/cart" className="dropdown-item" onClick={() => setShowPages(false)}>Cart Page</Link>
                      <Link href="/checkout" className="dropdown-item" onClick={() => setShowPages(false)}>Checkout</Link>
                      <Link href="/404" className="dropdown-item" onClick={() => setShowPages(false)}>404 Page</Link>
                    </div>
                  </div>
                  <Link href="/contact" className="nav-item nav-link me-2">Contact</Link>
                  <div className={`nav-item dropdown d-block d-lg-none mb-3 ${showMobileCategories ? "show" : ""}`}>
                    <Link
                      href="#"
                      className={`nav-link dropdown-toggle ${showMobileCategories ? "show" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMobileCategories(!showMobileCategories);
                      }}
                      aria-expanded={showMobileCategories}
                      style={{ color: "#fff" }}
                    >
                      All Category
                    </Link>
                    <div className={`dropdown-menu m-0 ${showMobileCategories ? "show" : ""}`}>
                      <ul className="list-unstyled categories-bars">
                        {categories.map((cat) => (
                          <li key={cat.name}>
                            <div className="categories-bars-item">
                              <Link href={`/products?category=${encodeURIComponent(cat.name)}`}>{cat.name}</Link>
                              <span>({cat.count})</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <Link href="tel:+919825156789" className="btn btn-secondary rounded-pill py-2 px-4 px-lg-3 mb-3 mb-md-3 mb-lg-0">
                  <i className="fa fa-mobile-alt me-2"></i> {companyInfo.phone}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </>
  );
}