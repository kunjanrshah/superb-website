"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCard";
import Services from "@/components/Services";
import { products } from "@/constants/products";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabProducts = [
    products,
    products.filter((p) => p.newArrival),
    products.filter((p) => p.featured),
    products.filter((p) => p.topSelling),
  ];

  const tabs = ["All Products", "New Arrivals", "Featured", "Top Selling"];

  return (
    <>
      {/* Hero Carousel Start */}
      <div className="container-fluid carousel bg-light px-0">
        <div className="row g-0 justify-content-end">
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="header-carousel bg-light py-5">
              {[
                {
                  img: "/img/carousel-1.png",
                  badge: "Save Up To A $400",
                  title: "On Selected Laptops & Desktop Or Smartphone",
                },
                {
                  img: "/img/carousel-2.png",
                  badge: "Save Up To A $200",
                  title: "On Selected Laptops & Desktop Or Smartphone",
                },
              ].map((slide, i) => (
                <div key={i} className="row g-0 header-carousel-item align-items-center">
                  <div className="col-xl-6 carousel-img">
                    <Image src={slide.img} className="img-fluid w-100" alt="Image" width={600} height={400} />
                  </div>
                  <div className="col-xl-6 carousel-content p-4">
                    <h4 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: "3px" }}>
                      {slide.badge}
                    </h4>
                    <h1 className="display-3 text-capitalize mb-4">{slide.title}</h1>
                    <p className="text-dark">Terms and Condition Apply</p>
                    <Link className="btn btn-primary rounded-pill py-3 px-5" href="#">
                      Shop Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-3">
            <div className="carousel-header-banner h-100">
              <Image
                src="/img/header-img.jpg"
                className="img-fluid w-100 h-100"
                style={{ objectFit: "cover" }}
                alt="Image"
                width={400}
                height={500}
              />
              <div className="carousel-banner-offer">
                <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">Save $48.00</p>
                <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
              </div>
              <div className="carousel-banner">
                <div className="carousel-banner-content text-center p-4">
                  <Link href="#" className="d-block mb-2">SmartPhone</Link>
                  <Link href="#" className="d-block text-white fs-3">Apple iPad Mini <br /> G2356</Link>
                  <del className="me-2 text-white fs-5">$1,250.00</del>
                  <span className="text-primary fs-5">$1,050.00</span>
                </div>
                <Link href="#" className="btn btn-primary rounded-pill py-2 px-4">
                  <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Carousel End */}

      <Services />

      {/* Products Offer Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <Link href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                <div>
                  <p className="text-muted mb-3">Find The Best Camera for You!</p>
                  <h3 className="text-primary">Smart Camera</h3>
                  <h1 className="display-3 text-secondary mb-0">40% <span className="text-primary fw-normal">Off</span></h1>
                </div>
                <Image src="/img/product-1.png" className="img-fluid" alt="" width={150} height={150} />
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="#" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                <div>
                  <p className="text-muted mb-3">Find The Best Whatches for You!</p>
                  <h3 className="text-primary">Smart Whatch</h3>
                  <h1 className="display-3 text-secondary mb-0">20% <span className="text-primary fw-normal">Off</span></h1>
                </div>
                <Image src="/img/product-2.png" className="img-fluid" alt="" width={150} height={150} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Products Offer End */}

      {/* Our Products Start */}
      <div className="container-fluid product py-5">
        <div className="container py-5">
          <div className="tab-class">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Our Products</h1>
              </div>
              <div className="col-lg-8 text-end">
                <ul className="nav nav-pills d-inline-flex text-center mb-5">
                  {tabs.map((tab, i) => (
                    <li key={tab} className="nav-item mb-4">
                      <a
                        className={`d-flex mx-2 py-2 bg-light rounded-pill ${activeTab === i ? "active" : ""}`}
                        onClick={() => setActiveTab(i)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="text-dark" style={{ width: "130px" }}>{tab}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {tabProducts[activeTab].slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Products End */}

      {/* Product Banner Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <Link href="#">
                <div className="bg-primary rounded position-relative">
                  <Image src="/img/product-banner.jpg" className="img-fluid w-100 rounded" alt="" width={600} height={300} />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                    style={{ background: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <h3 className="display-5 text-primary">EOS Rebel <br /> <span>T7i Kit</span></h3>
                    <p className="fs-4 text-muted">$899.99</p>
                    <span className="btn btn-primary rounded-pill align-self-start py-2 px-4">Shop Now</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="#">
                <div className="text-center bg-primary rounded position-relative">
                  <Image src="/img/product-banner-2.jpg" className="img-fluid w-100" alt="" width={600} height={300} />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                    style={{ background: "rgba(242, 139, 0, 0.5)" }}
                  >
                    <h2 className="display-2 text-secondary">SALE</h2>
                    <h4 className="display-5 text-white mb-4">Get UP To 50% Off</h4>
                    <span className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Shop Now</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Product Banner End */}

      {/* Bestseller Products Start */}
      <div className="container-fluid products pb-5">
        <div className="container products-mini py-5">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: "700px" }}>
            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
              Bestseller Products
            </h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, asperiores ducimus sint quos tempore
              officia similique quia? Libero, pariatur consectetur?
            </p>
          </div>
          <div className="row g-4">
            {products.filter((p) => p.topSelling).slice(0, 6).map((product) => (
              <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
                <div className="products-mini-item border">
                  <div className="row g-0">
                    <div className="col-5">
                      <div className="products-mini-img border-end h-100">
                        <Image src={product.image} className="img-fluid w-100 h-100" alt="Image" width={200} height={200} />
                        <div className="products-mini-icon rounded-circle bg-primary">
                          <Link href={`/products/${product.id}`}><i className="fa fa-eye fa-1x text-white"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-7">
                      <div className="products-mini-content p-3">
                        <Link href="#" className="d-block mb-2">{product.name}</Link>
                        <Link href={`/products/${product.id}`} className="d-block h4">{product.model}</Link>
                        <del className="me-2 fs-5">{product.oldPrice}</del>
                        <span className="text-primary fs-5">{product.price}</span>
                      </div>
                    </div>
                  </div>
                  <div className="products-mini-add border p-3">
                    <Link href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4">
                      <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                    </Link>
                    <div className="d-flex">
                      <Link href="#" className="text-primary d-flex align-items-center justify-content-center me-3">
                        <span className="rounded-circle btn-sm-square border"><i className="fas fa-random"></i></span>
                      </Link>
                      <Link href="#" className="text-primary d-flex align-items-center justify-content-center me-0">
                        <span className="rounded-circle btn-sm-square border"><i className="fas fa-heart"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bestseller Products End */}
    </>
  );
}