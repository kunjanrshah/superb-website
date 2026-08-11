"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/constants/products";
import PageHeader from "@/components/PageHeader";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id)) || products[0];

  return (
    <>
      <PageHeader title="Single Product" breadcrumb="Single Product" />
      <div className="container-fluid shop py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-5 col-xl-3">
              <div className="input-group w-100 mx-auto d-flex mb-4">
                <input type="search" className="form-control p-3" placeholder="Search weighing scales..." aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
              </div>
              <div className="product-categories mb-4">
                <h4>Weighing Scale Categories</h4>
                <ul className="list-unstyled">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <div className="categories-item">
                        <Link href={`/products?category=${encodeURIComponent(cat.name)}`} className="text-dark"><i className="fas fa-weight text-secondary me-2"></i>{cat.name}</Link>
                        <span>({cat.count})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-xl-9">
              <div className="row g-4 single-product">
                <div className="col-xl-6">
                  <div className="single-carousel owl-carousel">
                    <div className="single-item">
                      <div className="single-inner bg-light rounded">
                        <Image src={product.image} className="img-fluid rounded" alt={product.name} width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "400px" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <h4 className="fw-bold mb-3">{product.name}</h4>
                  <p className="mb-3">Category: {product.category}</p>
                  <h5 className="fw-bold mb-3">{product.price}</h5>
                  <div className="d-flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i key={i} className={`fa fa-star ${i < product.rating ? "text-secondary" : ""}`}></i>
                    ))}
                  </div>
                  <div className="mb-3">
                    <div className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2"><i className="fab fa-facebook-f me-1"></i> Share</div>
                    <div className="btn btn-secondary d-inline-block rounded text-white py-1 px-4 ms-2"><i className="fab fa-twitter ms-1"></i> Share</div>
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <small>Product SKU: {product.model}</small>
                    <small>Available: <strong className="text-primary">In Stock</strong></small>
                  </div>
                  <p className="mb-4">{product.shortDescription}</p>
                  <div className="input-group quantity mb-5" style={{ width: "100px" }}>
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border"><i className="fa fa-minus"></i></button>
                    </div>
                    <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border"><i className="fa fa-plus"></i></button>
                    </div>
                  </div>
                  <Link href="#" className="btn btn-primary border border-secondary rounded-pill px-4 py-2 mb-4">
                    <i className="fa fa-shopping-bag me-2 text-white"></i> Add to cart
                  </Link>
                </div>
                <div className="col-lg-12">
                  <nav>
                    <div className="nav nav-tabs mb-3">
                      <button className="nav-link active border-white border-bottom-0" type="button" data-bs-toggle="tab" data-bs-target="#nav-about">Description</button>
                      <button className="nav-link border-white border-bottom-0" type="button" data-bs-toggle="tab" data-bs-target="#nav-mission">Reviews</button>
                    </div>
                  </nav>
                  <div className="tab-content mb-5">
                    <div className="tab-pane active" id="nav-about">
                      <p className="mb-4">{product.description}</p>
                      <p className="mb-2"><strong>Model:</strong> {product.model}</p>
                      <p className="mb-2"><strong>Category:</strong> {product.category}</p>
                      <p className="mb-2"><strong>Capacity:</strong> See product specifications</p>
                      <p className="mb-0"><strong>Accuracy:</strong> High precision measurement for reliable weighing</p>
                    </div>
                    <div className="tab-pane" id="nav-mission">
                      <div className="d-flex">
                        <Image src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{ width: "100px", height: "100px" }} alt="" width={100} height={100} />
                        <div>
                          <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                          <h5>Jason Smith</h5>
                          <p>The generated Lorem Ipsum is therefore always free from repetition injected humour.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}