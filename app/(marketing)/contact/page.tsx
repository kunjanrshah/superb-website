"use client";

import PageHeader from "@/components/PageHeader";
import { companyInfo } from "@/constants/products";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div className="text-center mx-auto" style={{ maxWidth: "900px" }}>
                  <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Get in touch</h4>
                  <p className="mb-5 fs-5 text-dark">We are here for you! Contact Superb Instruments for all your weighing scale needs - manufacturing, supply, and repair services.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <h5 className="text-primary">{"Let's Connect"}</h5>
                <h1 className="display-5 mb-4">Send Your Message</h1>
                <p className="mb-4">Need a weighing scale, repair service, or custom weighing solution? Send us a message and our team will get back to you within 24 hours.</p>
                <form>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <select className="form-select" id="scaleType" defaultValue="">
                          <option value="" disabled>Select Scale Type</option>
                          <option>Platform Scale</option>
                          <option>Bench Scale</option>
                          <option>Crane Scale</option>
                          <option>Precision Balance</option>
                          <option>Tank Weighing System</option>
                          <option>Digital Scale</option>
                          <option>Scale Repair Service</option>
                          <option>Other</option>
                        </select>
                        <label htmlFor="scaleType">Scale Type</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "160px" }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    style={{ height: "100%", minHeight: "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9072951950683!2d72.6362153149676!3d23.030868784943847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row g-4 align-items-center justify-content-center">
                  {[
                    { icon: "fas fa-map-marker-alt", title: "Address", desc: companyInfo.address },
                    { icon: "fas fa-envelope", title: "Mail Us", desc: companyInfo.email },
                    { icon: "fa fa-phone-alt", title: "Telephone", desc: companyInfo.phone },
                    { icon: "fab fa-firefox-browser", title: "Website", desc: companyInfo.website },
                  ].map((item) => (
                    <div key={item.title} className="col-md-6 col-lg-6 col-xl-3">
                      <div className="rounded p-4">
                        <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                          <i className={`${item.icon} fa-2x text-primary`}></i>
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <p className="mb-2">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}