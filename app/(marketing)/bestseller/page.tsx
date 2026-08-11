"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { products } from "@/constants/products";

export default function BestsellerPage() {
  return (
    <>
      <PageHeader title="Bestseller Products" breadcrumb="Bestseller" />
      <Services />

      {/* Products Offer Start */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row g-4">
              <div className="col-lg-6">
                <Link href="/products?category=Platform%20Scales" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                  <div>
                    <p className="text-muted mb-3">Industrial Platform Scales!</p>
                    <h3 className="text-primary">Platform Scales</h3>
                    <h1 className="display-3 text-secondary mb-0">30% <span className="text-primary fw-normal">Off</span></h1>
                  </div>
                  <Image src="/img/scales/12344electronic-platform-scale-100kg-1495262523-3002060.jpeg" className="img-fluid" alt="Platform Scale" width={150} height={150} style={{ objectFit: "cover" }} />
                </Link>
              </div>
              <div className="col-lg-6">
                <Link href="/products?category=Precision%20Balances" className="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                  <div>
                    <p className="text-muted mb-3">Precision Measuring Tools!</p>
<h3 className="text-primary">Precision Balances</h3>
                    <h1 className="display-3 text-secondary mb-0">25% <span className="text-primary fw-normal">Off</span></h1>
                  </div>
                  <Image src="/img/scales/jewellery-weighing-scale.jpeg" className="img-fluid" alt="Precision Balance" width={150} height={150} style={{ objectFit: "cover" }} />
                </Link>
              </div>
          </div>
        </div>
      </div>
      {/* Products Offer End */}

      {/* Bestseller Products Start */}
      <div className="container-fluid products pt-5">
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
            {products.filter((p) => p.topSelling).map((product) => (
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