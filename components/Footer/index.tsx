import Link from "next/link";
import { companyInfo } from "@/constants/products";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-4 rounded mb-5" style={{ background: "rgba(255, 255, 255, .03)" }}>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Address</h4>
                  <p className="mb-2">{companyInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Mail Us</h4>
                  <p className="mb-2">{companyInfo.email}</p>
                  <p className="mb-0">{companyInfo.email2}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="fa fa-phone-alt fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">Telephone</h4>
                  <p className="mb-0">{companyInfo.phone}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="rounded p-4">
                <div
                  className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                  style={{ width: "70px", height: "70px" }}
                >
                  <i className="fab fa-firefox-browser fa-2x text-primary"></i>
                </div>
                <div>
                  <h4 className="text-white">{companyInfo.website}</h4>
                  <p className="mb-2">{companyInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-primary mb-4">About Superb Instruments</h4>
                  <p className="mb-3">
                    {companyInfo.description}
                  </p>
                  <div className="position-relative mx-auto rounded-pill">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Customer Service</h4>
                <Link href="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</Link>
                <Link href="/about"><i className="fas fa-angle-right me-2"></i> About Us</Link>
                <Link href="/products"><i className="fas fa-angle-right me-2"></i> Our Products</Link>
                <Link href="/bestseller"><i className="fas fa-angle-right me-2"></i> Bestsellers</Link>
                <Link href="/products"><i className="fas fa-angle-right me-2"></i> Scale Repair Service</Link>
                <Link href="/contact"><i className="fas fa-angle-right me-2"></i> Support</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Information</h4>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> About Us</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Delivery infomation</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Warranty</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> FAQ</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Seller Login</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-primary mb-4">Extras</h4>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Brands</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Gift Vouchers</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Affiliates</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Wishlist</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Order History</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Track Your Order</Link>
                <Link href="#"><i className="fas fa-angle-right me-2"></i> Track Your Order</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Copyright Start */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-white">
                <Link href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>Superb Instruments
                </Link>
                , All right reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end text-white">
              Designed By <a className="border-bottom text-white" href="https://htmlcodex.com">Kunjan Shah</a>.
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
}