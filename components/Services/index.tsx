const services = [
  { icon: "fa fa-sync-alt", title: "Free Return", desc: "30 days money back guarantee!" },
  { icon: "fab fa-telegram-plane", title: "Free Shipping", desc: "Free shipping on all order" },
  { icon: "fas fa-life-ring", title: "Support 24/7", desc: "We support online 24 hrs a day" },
  { icon: "fas fa-credit-card", title: "Receive Gift Card", desc: "Recieve gift all over oder $50" },
  { icon: "fas fa-lock", title: "Secure Payment", desc: "We Value Your Security" },
  { icon: "fas fa-blog", title: "Online Service", desc: "Free return products in 30 days" },
];

export default function Services() {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        {services.map((s, i) => (
          <div key={s.title} className="col-6 col-md-4 col-lg-2 border-start border-end">
            <div className="p-4">
              <div className="d-inline-flex align-items-center">
                <i className={`${s.icon} fa-2x text-primary`}></i>
                <div className="ms-4">
                  <h6 className="text-uppercase mb-2">{s.title}</h6>
                  <p className="mb-0">{s.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}