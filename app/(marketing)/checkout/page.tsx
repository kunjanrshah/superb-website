"use client";

import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title="Checkout Page" breadcrumb="Checkout" />
      <Services />
      <div className="container-fluid bg-light overflow-hidden py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="#">
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-6">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">First Name<sup>*</sup></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">Last Name<sup>*</sup></label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Company Name<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Address <sup>*</sup></label>
                  <input type="text" className="form-control" placeholder="House Number Street Name" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Town/City<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Country<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Mobile<sup>*</sup></label>
                  <input type="tel" className="form-control" />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">Email Address<sup>*</sup></label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-check my-3">
                  <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" />
                  <label className="form-check-label" htmlFor="Account-1">Create an account?</label>
                </div>
                <hr />
                <div className="form-check my-3">
                  <input className="form-check-input" type="checkbox" id="Address-1" name="Address" />
                  <label className="form-check-label" htmlFor="Address-1">Ship to a different address?</label>
                </div>
                <div className="form-item">
                  <textarea name="text" className="form-control" spellCheck={false} cols={30} rows={11} placeholder="Order Notes (Optional)"></textarea>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-6">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="text-center">
                        <th scope="col" className="text-start">Name</th>
                        <th scope="col">Model</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <tr key={i} className="text-center">
                          <th scope="row" className="text-start py-4">Apple iPad Mini</th>
                          <td className="py-4">G2356</td>
                          <td className="py-4">$269.00</td>
                          <td className="py-4">2</td>
                          <td className="py-4">$538.00</td>
                        </tr>
                      ))}
                      <tr>
                        <th scope="row"></th>
                        <td className="py-4"></td>
                        <td className="py-4"></td>
                        <td className="py-4"><p className="mb-0 text-dark py-2">Subtotal</p></td>
                        <td className="py-4"><div className="py-2 text-center border-bottom border-top"><p className="mb-0 text-dark">$1134.00</p></div></td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-4"><p className="mb-0 text-dark py-4">Shipping</p></td>
                        <td colSpan={3} className="py-4">
                          {["Free Shipping", "Flat rate: $15.00", "Local Pickup: $8.00"].map((s) => (
                            <div key={s} className="form-check text-start">
                              <input type="checkbox" className="form-check-input bg-primary border-0" />
                              <label className="form-check-label">{s}</label>
                            </div>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td className="py-4"><p className="mb-0 text-dark text-uppercase py-2">TOTAL</p></td>
                        <td className="py-4"></td>
                        <td className="py-4"></td>
                        <td className="py-4"><div className="py-2 text-center border-bottom border-top"><p className="mb-0 text-dark">$135.00</p></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {[
                  { id: "Transfer-1", label: "Direct Bank Transfer" },
                  { id: "Payments-1", label: "Check Payments" },
                  { id: "Delivery-1", label: "Cash On Delivery" },
                  { id: "Paypal-1", label: "Paypal" },
                ].map((p) => (
                  <div key={p.id} className="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                    <div className="col-12">
                      <div className="form-check text-start my-2">
                        <input type="checkbox" className="form-check-input bg-primary border-0" id={p.id} />
                        <label className="form-check-label" htmlFor={p.id}>{p.label}</label>
                      </div>
                      {p.id === "Transfer-1" && (
                        <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button type="button" className="btn btn-primary border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}