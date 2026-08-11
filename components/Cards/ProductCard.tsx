import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/constants/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="product-item rounded">
        <div className="product-item-inner border rounded">
          <div className="product-item-inner-item">
            <Image
              src={product.image}
              className="img-fluid w-100 rounded-top"
              alt={product.model}
              width={300}
              height={300}
            />
            {product.badge && (
              <div className={product.badge === "New" ? "product-new" : "product-sale"}>
                {product.badge}
              </div>
            )}
            <div className="product-details">
              <Link href={`/products/${product.id}`}><i className="fa fa-eye fa-1x"></i></Link>
            </div>
          </div>
          <div className="text-center rounded-bottom p-4">
            <Link href="#" className="d-block mb-2">{product.name}</Link>
            <Link href={`/products/${product.id}`} className="d-block h4">
              {product.model}
            </Link>
            <del className="me-2 fs-5">{product.oldPrice}</del>
            <span className="text-primary fs-5">{product.price}</span>
          </div>
        </div>
        <div className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
          <Link href="#" className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4">
            <i className="fas fa-shopping-cart me-2"></i> Add To Cart
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star ${i < product.rating ? "text-primary" : ""}`}
                ></i>
              ))}
            </div>
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
    </div>
  );
}