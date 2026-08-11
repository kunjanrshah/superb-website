"use client";

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import { companyInfo, categories, products } from "@/constants/products";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <Services />

      {/* About Start */}
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-5">
              <div className="about-img">
                <Image src="/img/scales/hero-1.jpg" className="img-fluid rounded w-100" alt="Superb Instruments" width={500} height={400} style={{ objectFit: "cover" }} />
                <div className="about-experience rounded">
                  <h1 className="display-5 text-white mb-0">25+</h1>
                  <p className="text-white mb-0">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div>
                <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">About Us</h4>
                <h1 className="display-5 mb-4">{companyInfo.name} - Your Trusted Weighing Scale Partner</h1>
                <p className="mb-4">{companyInfo.description}</p>
                <p className="mb-4">
                  We specialize in manufacturing, supplying, and repairing all types of weighing scales including
                  platform scales, bench scales, crane scales, precision balances, tank weighing systems, and digital
                  scales. Our team of experienced engineers ensures every product meets the highest standards of
                  accuracy, durability, and reliability.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px", flexShrink: 0 }}>
                        <i className="fas fa-industry fa-2x text-white"></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Manufacturing</h5>
                        <p className="mb-0">In-house manufacturing of high-quality weighing scales with precision engineering.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px", flexShrink: 0 }}>
                        <i className="fas fa-tools fa-2x text-white"></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Repair Services</h5>
                        <p className="mb-0">Expert repair and calibration services for all brands and types of weighing scales.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px", flexShrink: 0 }}>
                        <i className="fas fa-truck fa-2x text-white"></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Supply & Distribution</h5>
                        <p className="mb-0">Wide network for supplying weighing scales across India with fast delivery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-3" style={{ width: "60px", height: "60px", flexShrink: 0 }}>
                        <i className="fas fa-headset fa-2x text-white"></i>
                      </div>
                      <div>
                        <h5 className="mb-2">Customer Support</h5>
                        <p className="mb-0">Dedicated support team available to assist you with all your weighing needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <Link href="/products" className="btn btn-primary rounded-pill py-3 px-5">Shop Our Products</Link>
                  <Link href="/contact" className="btn btn-secondary rounded-pill py-3 px-5">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Categories Start */}
      <div className="container-fluid categories py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Our Categories</h4>
            <h1 className="display-5 mb-4">Weighing Scale Categories</h1>
            <p className="mb-0">We offer a complete range of weighing scales for every application - from precision laboratory balances to heavy-duty industrial platform scales.</p>
          </div>
          <div className="row g-4">
            {categories.map((cat) => (
              <div key={cat.name} className="col-md-6 col-lg-4 col-xl-3">
                <Link href={`/products?category=${encodeURIComponent(cat.name)}`} className="d-block">
                  <div className="categories-item border rounded p-4 text-center bg-white h-100">
                    <div className="mb-3 mx-auto" style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "50%" }}>
                      <Image src={cat.image} className="img-fluid w-100 h-100" alt={cat.name} width={120} height={120} style={{ objectFit: "cover" }} />
                    </div>
                    <h5 className="mb-2">{cat.name}</h5>
                    <p className="text-muted mb-0">{cat.count} Products</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Categories End */}

      {/* Why Choose Us Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
            <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Why Choose Us</h4>
            <h1 className="display-5 mb-4">Why Superb Instruments?</h1>
          </div>
          <div className="row g-4">
            {[
              { icon: "fas fa-check-circle", title: "Accurate & Reliable", desc: "All our weighing scales are calibrated for high accuracy and consistent performance." },
              { icon: "fas fa-shield-alt", title: "Quality Guaranteed", desc: "We use premium quality materials and components to ensure long-lasting durability." },
              { icon: "fas fa-rupee-sign", title: "Competitive Pricing", desc: "Best prices in the market with direct manufacturer pricing and no middlemen." },
              { icon: "fas fa-clock", title: "On-Time Delivery", desc: "Fast and reliable delivery across India with proper packaging and handling." },
              { icon: "fas fa-wrench", title: "Expert Repair", desc: "Skilled technicians for repair and maintenance of all weighing scale brands." },
              { icon: "fas fa-handshake", title: "Trusted Partner", desc: "25+ years of experience serving industries, businesses, and households." },
            ].map((item) => (
              <div key={item.title} className="col-md-6 col-lg-4">
                <div className="border rounded p-4 h-100 bg-light">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${item.icon} fa-2x text-primary me-3`}></i>
                    <h5 className="mb-0">{item.title}</h5>
                  </div>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Why Choose Us End */}
    </>
  );
}