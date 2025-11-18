import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductGallery from "../ProductGallery";
import ProductInfo from "../ProductInfo";
import ProductHighlights from "../ProductHightlights";

const thumbnails = [
  "/images/gamepad.png",
  "/images/gamepad.png",
  "/images/gamepad.png",
  "/images/gamepad.png",
];

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8 text-sm">
          <BreadcrumbList>
            <BreadcrumbItem>Account</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Gaming</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Havic HV G-92 Gamepad</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gallery */}
          <ProductGallery images={thumbnails} />

          {/* Info */}
          <div>
            <ProductInfo />
            <ProductHighlights />
          </div>
        </div>
      </div>
    </div>
  );
}
