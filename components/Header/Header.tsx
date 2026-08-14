"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, companyInfo } from "@/constants/products";

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [showCurrency,