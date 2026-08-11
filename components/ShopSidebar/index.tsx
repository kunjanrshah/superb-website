"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories, products, companyInfo } from "@/constants/products";

export default function ShopSidebar() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (catName: string) => {
    setSelectedCategory(catName === selectedCategory ? null : catName);
    router.push(`/products?category=${encodeURIComponent(catName)}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <div className="product-search mb-4">
        <h4>Search Products</h4>
        <form onSubmit={handleSearch} className="d-flex border rounded">
          <input
            type="search"
            className="form-control border-0 rounded"
            placeholder="Search weighing scales..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary rounded">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="product-categories mb-4">
        <h4>Products Categories</h4>
        <ul className="list-unstyled">
          {categories.map((cat) => (
            <li key={cat.name}>
              <div className="categories-item">
                <Link
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="text-dark"
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <i className="fas fa-weight text-secondary me-2"></i>{cat.name}
                </Link>
                <span>({cat.count})</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="price mb-4">
        <h4 className="mb-2">Price Range</h4>
        <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="50000" defaultValue={50000} />
        <output id="amount" name="amount">₹0 - ₹50,000</output>
      </div>
      <div className="additional-product mb-4">
        <h4>Scale Types</h4>
        {["Digital", "Mechanical", "Precision", "Industrial", "Portable"].map((type, i) => (
          <div key={type} className="additional-product-item">
            <input type="radio" className="me-2" id={`Categories-${i}`} name="Categories-1" />
            <label htmlFor={`Categories-${i}`} className="text-dark">{type}</label>
          </div>
        ))}
      </div>
      <div className="featured-product mb-4">
        <h4 className="mb-3">Featured products</h4>
        {featuredProducts.map((p) => (
          <div key={p.id} className="featured-product-item mb-3">
            <div className="rounded me-4" style={{ width: "100px", height: "100px" }}>
              <Image src={p.image} className="img-fluid rounded" alt={p.name} width={100} height={100} style={{ objectFit: "cover", width: "100px", height: "100px" }} />
            </div>
            <div>
              <h6 className="mb-2">{p.name}</h6>
              <div className="d-flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className={`fa fa-star ${i < p.rating ? "text-secondary" : ""}`}></i>
                ))}
              </div>
              <div className="d-flex mb-2">
                <h5 className="fw-bold me-2">{p.price}</h5>
                <h5 className="text-danger text-decoration-line-through">{p.oldPrice}</h5>
              </div>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center my-4">
          <Link href="/products" className="btn btn-primary px-4 py-3 rounded-pill w-100">View More</Link>
        </div>
      </div>
      <div className="product-tags py-4">
        <h4 className="mb-3">PRODUCT TAGS</h4>
        <div className="product-tags-items bg-light rounded p-3">
          {["Platform", "Bench", "Crane", "Precision", "Digital", "Industrial", "Waterproof", "Mechanical", "Jewellery", "Counting"].map((tag) => (
            <Link key={tag} href={`/products?search=${encodeURIComponent(tag)}`} className="border rounded py-1 px-2 mb-2">{tag}</Link>
          ))}
        </div>
      </div>
    </>
  );
}