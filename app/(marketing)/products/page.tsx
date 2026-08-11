"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import ShopSidebar from "@/components/ShopSidebar";
import ProductCard from "@/components/Cards/ProductCard";
import { products } from "@/constants/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchFilter = searchParams.get("search");
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFilter);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (searchFilter) {
      const term = searchFilter.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.model.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.shortDescription.toLowerCase().includes(term)
      );
    }
    return result;
  }, [categoryFilter, searchFilter]);

  useEffect(() => {
    if (categoryFilter || searchFilter) {
      const productsSection = document.getElementById("products");
      if (productsSection) {
        setTimeout(() => {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [categoryFilter, searchFilter]);

  return (
    <>
      <PageHeader title="Weighing Scales Shop" breadcrumb="Shop" />
      <Services />
      <div className="container-fluid shop py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-3">
              <ShopSidebar />
            </div>
            <div className="col-lg-9">
              {!categoryFilter && !searchFilter && (
                <div className="rounded mb-4 position-relative">
                  <Image src="/img/scales/hero-1.jpg" className="img-fluid rounded w-100" style={{ height: "250px", objectFit: "cover" }} alt="Weighing Scales" width={800} height={250} />
                  <div className="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ width: "100%", height: "250px", top: 0, left: 0, background: "rgba(242, 139, 0, 0.3)" }}>
                    <h4 className="display-5 text-primary">SUPERB INSTRUMENTS</h4>
                    <h3 className="display-4 text-white mb-4">All Types of Weighing Scales</h3>
                    <Link href="#products" className="btn btn-primary rounded-pill">Shop Now</Link>
                  </div>
                </div>
              )}
              {categoryFilter && (
                <div className="bg-primary rounded p-4 mb-4 text-center">
                  <h3 className="text-white mb-0">Category: {categoryFilter}</h3>
                  <p className="text-white-50 mb-0">{filteredProducts.length} products found</p>
                </div>
              )}
              {searchFilter && (
                <div className="bg-primary rounded p-4 mb-4 text-center">
                  <h3 className="text-white mb-0">Search Results for: &ldquo;{searchFilter}&rdquo;</h3>
                  <p className="text-white-50 mb-0">{filteredProducts.length} products found</p>
                </div>
              )}
              <div className="row g-4 product" id="products">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h3 className="mb-3">No products found</h3>
                    <p className="mb-4">Try searching with a different keyword or category.</p>
                    <Link href="/products" className="btn btn-primary rounded-pill px-4 py-3">View All Products</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-5">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}