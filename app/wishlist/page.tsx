import ProductCard from "@/components/layout/shared/ProductCard";
import WishlistHeader from "./WishlistHeader";
import SectionTitle from "./SectionTitle";


export default function WishlistPage() {
  const wishlistItems = [
    { image: "/wishlist/gucci-bag.jpg", title: "Gucci duffle bag", price: 960, originalPrice: 1160, badge: "-35%" },
    { image: "/wishlist/cooler.jpg", title: "RGB liquid CPU Cooler", price: 1960 },
    { image: "/wishlist/gamepad.jpg", title: "GP11 Shooter USB Gamepad", price: 550 },
    { image: "/wishlist/jacket.jpg", title: "Quilted Satin Jacket", price: 750 },
  ];

  const recommendedItems = [
    { image: "/recommended/laptop.jpg", title: "ASUS FHD Gaming Laptop", price: 1160, rating: 5, reviews: 65 },
    { image: "/recommended/monitor.jpg", title: "IPS LCD Gaming Monitor", price: 1160, rating: 5, reviews: 65 },
    { image: "/recommended/red-gamepad.jpg", title: "HAVIT HV-G92 Gamepad", price: 550, rating: 5, reviews: 65, badge: "NEW" },
    { image: "/recommended/keyboard.jpg", title: "AK-900 Wired Keyboard", price: 200, rating: 5, reviews: 65 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Wishlist Section */}
        <WishlistHeader />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {wishlistItems.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>

        {/* Just For You Section */}
        <SectionTitle title="Just For You" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recommendedItems.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}