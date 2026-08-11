import Link from "next/link";

interface PageHeaderProps {
  title: string;
  breadcrumb: string;
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">{title}</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="#">Pages</Link>
        </li>
        <li className="breadcrumb-item active text-white">{breadcrumb}</li>
      </ol>
    </div>
  );
}