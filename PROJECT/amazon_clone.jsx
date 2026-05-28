import { useState, useMemo } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "boAt Rockerz 450 Bluetooth Headphones",
    category: "Electronics",
    price: 1299,
    originalPrice: 3990,
    rating: 4.3,
    reviews: 45231,
    image: "🎧",
    badge: "Best Seller",
    prime: true,
    description: "40mm dynamic drivers, 15hr battery, foldable design",
  },
  {
    id: 2,
    name: 'Samsung 55" 4K Smart TV',
    category: "Electronics",
    price: 42999,
    originalPrice: 74999,
    rating: 4.5,
    reviews: 12890,
    image: "📺",
    badge: "Deal of the Day",
    prime: true,
    description: "Crystal UHD, Tizen OS, HDR10+",
  },
  {
    id: 3,
    name: "iPhone 15 (128GB, Black)",
    category: "Electronics",
    price: 79900,
    originalPrice: 84900,
    rating: 4.7,
    reviews: 89034,
    image: "📱",
    badge: "Amazon's Choice",
    prime: true,
    description: "A16 Bionic chip, 48MP camera, Dynamic Island",
  },
  {
    id: 4,
    name: "Fitbit Charge 6 Fitness Tracker",
    category: "Electronics",
    price: 12999,
    originalPrice: 17999,
    rating: 4.2,
    reviews: 6712,
    image: "⌚",
    badge: null,
    prime: true,
    description: "Built-in GPS, Heart rate monitoring, 7-day battery",
  },
  {
    id: 5,
    name: "Prestige IRIS 750W Mixer Grinder",
    category: "Home & Kitchen",
    price: 2299,
    originalPrice: 3995,
    rating: 4.4,
    reviews: 23456,
    image: "🥣",
    badge: "Best Seller",
    prime: true,
    description: "3 jars, 3 speed settings + pulse, ISI certified",
  },
  {
    id: 6,
    name: "Bajaj 1.7L Electric Kettle",
    category: "Home & Kitchen",
    price: 849,
    originalPrice: 1499,
    rating: 4.1,
    reviews: 8923,
    image: "☕",
    badge: null,
    prime: false,
    description: "1500W, Auto shut-off, Stainless steel body",
  },
  {
    id: 7,
    name: "Amazon Echo Dot (5th Gen)",
    category: "Electronics",
    price: 4499,
    originalPrice: 5499,
    rating: 4.6,
    reviews: 31204,
    image: "🔊",
    badge: "Amazon's Choice",
    prime: true,
    description: "Alexa built-in, improved bass, eero Built-in",
  },
  {
    id: 8,
    name: "Harry Potter Complete Box Set",
    category: "Books",
    price: 2499,
    originalPrice: 4200,
    rating: 4.9,
    reviews: 54321,
    image: "📚",
    badge: "Best Seller",
    prime: true,
    description: "All 7 books, Hardcover, Bloomsbury Edition",
  },
  {
    id: 9,
    name: "Atomic Habits – James Clear",
    category: "Books",
    price: 399,
    originalPrice: 699,
    rating: 4.8,
    reviews: 67890,
    image: "📖",
    badge: "Amazon's Choice",
    prime: true,
    description: "Paperback, 320 pages, 2023 reprint",
  },
  {
    id: 10,
    name: "LEGO Technic Bugatti Chiron",
    category: "Toys & Games",
    price: 14999,
    originalPrice: 19999,
    rating: 4.7,
    reviews: 4532,
    image: "🧩",
    badge: "Limited Deal",
    prime: true,
    description: "3599 pieces, 1:8 scale, moving engine",
  },
  {
    id: 11,
    name: "Nike Air Max 270 Running Shoes",
    category: "Fashion",
    price: 8999,
    originalPrice: 13995,
    rating: 4.3,
    reviews: 19023,
    image: "👟",
    badge: null,
    prime: true,
    description: "Air Max cushioning, Mesh upper, Size 6-12",
  },
  {
    id: 12,
    name: "Himalaya Neem Face Wash (Pack of 3)",
    category: "Beauty",
    price: 279,
    originalPrice: 360,
    rating: 4.5,
    reviews: 88123,
    image: "🧴",
    badge: "Amazon's Choice",
    prime: true,
    description: "200ml each, Purifies & prevents pimples",
  },
  {
    id: 13,
    name: "Sony WH-1000XM5 Noise Cancelling",
    category: "Electronics",
    price: 24990,
    originalPrice: 34990,
    rating: 4.8,
    reviews: 15672,
    image: "🎵",
    badge: "Premium Pick",
    prime: true,
    description: "Industry-leading ANC, 30hr battery, LDAC",
  },
  {
    id: 14,
    name: "Philips Air Fryer HD9200",
    category: "Home & Kitchen",
    price: 6499,
    originalPrice: 9999,
    rating: 4.6,
    reviews: 28432,
    image: "🍟",
    badge: "Best Seller",
    prime: true,
    description: "4.1L, Rapid Air Technology, 90% less fat",
  },
  {
    id: 15,
    name: "Classmate Composition Notebook (10 Pack)",
    category: "Stationery",
    price: 320,
    originalPrice: 450,
    rating: 4.2,
    reviews: 12901,
    image: "📓",
    badge: null,
    prime: false,
    description: "200 pages each, Single line, A4 size",
  },
  {
    id: 16,
    name: "Yoga Mat with Carry Bag",
    category: "Sports",
    price: 799,
    originalPrice: 1299,
    rating: 4.0,
    reviews: 7634,
    image: "🧘",
    badge: null,
    prime: true,
    description: "6mm thick, Non-slip, Extra wide 183×61cm",
  },
];

const CATEGORIES = [
  "All",
  "Electronics",
  "Home & Kitchen",
  "Books",
  "Toys & Games",
  "Fashion",
  "Beauty",
  "Sports",
  "Stationery",
];

const BANNERS = [
  {
    title: "Great Indian Festival Sale",
    subtitle: "Up to 80% off on Electronics",
    bg: "#232f3e",
    accent: "#ff9900",
    emoji: "⚡",
  },
  {
    title: "Prime Exclusive Deals",
    subtitle: "Free same-day delivery on thousands of items",
    bg: "#0f1111",
    accent: "#00b8ff",
    emoji: "🚀",
  },
  {
    title: "New Arrivals in Fashion",
    subtitle: "Trending styles at unbeatable prices",
    bg: "#1a1a2e",
    accent: "#ff6b9d",
    emoji: "👗",
  },
];

function StarRating({ rating }) {
  return (
    <span style={{ color: "#ff9900", fontSize: 13, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#888", marginLeft: 4, fontSize: 12 }}>
        {rating}
      </span>
    </span>
  );
}

function Badge({ text }) {
  const colors = {
    "Best Seller": { bg: "#c45500", text: "#fff" },
    "Amazon's Choice": { bg: "#232f3e", text: "#00b8ff" },
    "Deal of the Day": { bg: "#cc0c39", text: "#fff" },
    "Limited Deal": { bg: "#007600", text: "#fff" },
    "Premium Pick": { bg: "#6b4fbb", text: "#fff" },
  };
  const c = colors[text] || { bg: "#888", text: "#fff" };
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: 3,
        letterSpacing: 0.5,
        fontFamily: "Arial Narrow, Arial, sans-serif",
      }}
    >
      {text}
    </span>
  );
}

function ProductCard({ product, onAdd, onView, inCart }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );
  return (
    <div
      onClick={() => onView(product)}
      style={{
        background: "#fff",
        border: "1px solid #e8e8e8",
        borderRadius: 8,
        padding: 14,
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.1s",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.13)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      {product.badge && (
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <Badge text={product.badge} />
        </div>
      )}
      <div
        style={{
          fontSize: 56,
          textAlign: "center",
          padding: "20px 0 10px",
          background: "#f8f8f8",
          borderRadius: 6,
        }}
      >
        {product.image}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "#0f1111",
          fontWeight: 400,
          lineHeight: 1.4,
          minHeight: 36,
        }}
      >
        {product.name}
      </div>
      <StarRating rating={product.rating} />
      <div style={{ fontSize: 11, color: "#888" }}>
        {product.reviews.toLocaleString()} ratings
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#0f1111" }}>
          ₹{product.price.toLocaleString()}
        </span>
        <span
          style={{
            fontSize: 12,
            color: "#888",
            textDecoration: "line-through",
          }}
        >
          ₹{product.originalPrice.toLocaleString()}
        </span>
        <span style={{ fontSize: 12, color: "#cc0c39", fontWeight: 600 }}>
          ({discount}% off)
        </span>
      </div>
      {product.prime && (
        <div
          style={{
            fontSize: 11,
            color: "#00a8e0",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          ✓ FREE Prime Delivery
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAdd(product);
        }}
        style={{
          marginTop: 6,
          padding: "8px 0",
          borderRadius: 20,
          border: "none",
          background: inCart ? "#e8f5e9" : "#ff9900",
          color: inCart ? "#2e7d32" : "#0f1111",
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        {inCart ? "✓ Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

function CartDrawer({ cart, onClose, onRemove, onQtyChange }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const [ordered, setOrdered] = useState(false);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex" }}>
      <div
        onClick={onClose}
        style={{ flex: 1, background: "rgba(0,0,0,0.5)" }}
      />
      <div
        style={{
          width: 380,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            background: "#232f3e",
            color: "#fff",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 18 }}>
            🛒 Your Cart ({cart.reduce((s, i) => s + i.qty, 0)} items)
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#ff9900",
              fontSize: 22,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {cart.length === 0 && (
            <div style={{ textAlign: "center", color: "#888", marginTop: 60 }}>
              Your cart is empty 🛒
            </div>
          )}
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 12,
                border: "1px solid #e8e8e8",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  background: "#f8f8f8",
                  borderRadius: 6,
                  padding: "8px 12px",
                }}
              >
                {item.image}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: "#0f1111",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    color: "#cc0c39",
                    fontSize: 13,
                    fontWeight: 700,
                    marginTop: 2,
                  }}
                >
                  ₹{item.price.toLocaleString()}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 6,
                  }}
                >
                  <button
                    onClick={() => onQtyChange(item.id, -1)}
                    style={{
                      width: 26,
                      height: 26,
                      border: "1px solid #ccc",
                      background: "#f0f0f0",
                      borderRadius: 4,
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    −
                  </button>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => onQtyChange(item.id, 1)}
                    style={{
                      width: 26,
                      height: 26,
                      border: "1px solid #ccc",
                      background: "#f0f0f0",
                      borderRadius: 4,
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={{
                      marginLeft: 4,
                      color: "#cc0c39",
                      background: "none",
                      border: "none",
                      fontSize: 12,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div style={{ borderTop: "1px solid #e8e8e8", padding: 16 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 15 }}>
                Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} items):
              </span>
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                ₹{total.toLocaleString()}
              </span>
            </div>
            {!ordered ? (
              <button
                onClick={() => setOrdered(true)}
                style={{
                  width: "100%",
                  padding: "12px 0",
                  background: "#ff9900",
                  border: "none",
                  borderRadius: 20,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Proceed to Checkout
              </button>
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: 12,
                  background: "#e8f5e9",
                  borderRadius: 8,
                  color: "#2e7d32",
                  fontWeight: 700,
                }}
              >
                🎉 Order Placed! Thank you!
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, onAdd, inCart }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          width: 520,
          maxHeight: "80vh",
          overflowY: "auto",
          padding: 28,
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 14,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 22,
            cursor: "pointer",
            color: "#888",
          }}
        >
          ✕
        </button>
        <div
          style={{
            fontSize: 80,
            textAlign: "center",
            background: "#f8f8f8",
            borderRadius: 10,
            padding: "28px 0",
            marginBottom: 18,
          }}
        >
          {product.image}
        </div>
        {product.badge && (
          <div style={{ marginBottom: 8 }}>
            <Badge text={product.badge} />
          </div>
        )}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#0f1111",
            marginBottom: 8,
          }}
        >
          {product.name}
        </div>
        <StarRating rating={product.rating} />
        <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>
          {product.reviews.toLocaleString()} customer ratings
        </div>
        <div
          style={{
            borderTop: "1px solid #eee",
            paddingTop: 10,
            marginBottom: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>
            About this item:
          </div>
          <div style={{ fontSize: 13, color: "#0f1111" }}>
            {product.description}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 700, color: "#0f1111" }}>
            ₹{product.price.toLocaleString()}
          </span>
          <span
            style={{
              fontSize: 14,
              color: "#888",
              textDecoration: "line-through",
            }}
          >
            ₹{product.originalPrice.toLocaleString()}
          </span>
          <span style={{ fontSize: 14, color: "#cc0c39", fontWeight: 700 }}>
            Save {discount}%
          </span>
        </div>
        {product.prime && (
          <div
            style={{
              color: "#00a8e0",
              fontWeight: 700,
              fontSize: 12,
              marginBottom: 12,
            }}
          >
            ✓ FREE Prime Delivery — Order within 2 hrs
          </div>
        )}
        <button
          onClick={() => {
            onAdd(product);
            onClose();
          }}
          style={{
            width: "100%",
            padding: "12px 0",
            background: inCart ? "#e8f5e9" : "#ff9900",
            color: inCart ? "#2e7d32" : "#0f1111",
            border: "none",
            borderRadius: 20,
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          {inCart ? "✓ Already in Cart — View Cart" : "Add to Cart"}
        </button>
        <button
          onClick={() => onAdd(product)}
          style={{
            width: "100%",
            marginTop: 8,
            padding: "11px 0",
            background: "#febd69",
            color: "#0f1111",
            border: "none",
            borderRadius: 20,
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default function AmazonClone() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [bannerIdx, setBannerIdx] = useState(0);
  const [viewProduct, setViewProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const banner = BANNERS[bannerIdx];

  const filtered = useMemo(() => {
    return PRODUCTS.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (search === "" ||
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())),
    );
  }, [category, search]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i,
      ),
    );
  };

  const inCart = (id) => cart.some((i) => i.id === id);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eaeded",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#232f3e",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "8px 16px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: -1,
              whiteSpace: "nowrap",
              border: "1.5px solid transparent",
              padding: "4px 8px",
              borderRadius: 4,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.border = "1.5px solid #fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.border = "1.5px solid transparent")
            }
          >
            amazon
            <span
              style={{ color: "#ff9900", fontSize: 10, verticalAlign: "super" }}
            >
              .in
            </span>
          </div>
          {/* Delivery */}
          <div
            style={{
              color: "#ccc",
              fontSize: 11,
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              border: "1.5px solid transparent",
              padding: "4px 6px",
              borderRadius: 4,
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.border = "1.5px solid #fff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.border = "1.5px solid transparent")
            }
          >
            <div>📍 Deliver to</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 12 }}>
              Gurugram 122001
            </div>
          </div>
          {/* Search bar */}
          <div
            style={{
              flex: 1,
              display: "flex",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                background: "#f3f3f3",
                border: "none",
                padding: "0 8px",
                fontSize: 12,
                color: "#555",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Amazon.in"
              style={{
                flex: 1,
                border: "none",
                padding: "0 14px",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              style={{
                background: "#ff9900",
                border: "none",
                padding: "0 16px",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              🔍
            </button>
          </div>
          {/* Right icons */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <div
              style={{
                color: "#fff",
                fontSize: 12,
                border: "1.5px solid transparent",
                padding: "4px 8px",
                borderRadius: 4,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "1.5px solid #fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "1.5px solid transparent")
              }
            >
              <div style={{ color: "#ccc", fontSize: 10 }}>Hello, Sign in</div>
              <div style={{ fontWeight: 700 }}>Account & Lists ▾</div>
            </div>
            <div
              style={{
                color: "#fff",
                fontSize: 12,
                border: "1.5px solid transparent",
                padding: "4px 8px",
                borderRadius: 4,
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "1.5px solid #fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "1.5px solid transparent")
              }
            >
              <div style={{ color: "#ccc", fontSize: 10 }}>Returns</div>
              <div style={{ fontWeight: 700 }}>& Orders</div>
            </div>
            <div
              onClick={() => setCartOpen(true)}
              style={{
                color: "#fff",
                border: "1.5px solid transparent",
                padding: "4px 8px",
                borderRadius: 4,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "1.5px solid #fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "1.5px solid transparent")
              }
            >
              <span style={{ fontSize: 28, position: "relative" }}>
                🛒
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: -4,
                      right: -4,
                      background: "#ff9900",
                      color: "#0f1111",
                      borderRadius: "50%",
                      width: 18,
                      height: 18,
                      fontSize: 11,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>Cart</span>
            </div>
          </div>
        </div>
        {/* Nav bar */}
        <div
          style={{
            background: "#37475a",
            display: "flex",
            gap: 0,
            padding: "0 8px",
            overflowX: "auto",
          }}
        >
          {[
            "All",
            "Today's Deals",
            "Customer Service",
            "Prime",
            "New Releases",
            "Mobiles",
            "Electronics",
            "Home & Kitchen",
            "Fashion",
            "Books",
          ].map((nav) => (
            <button
              key={nav}
              onClick={() =>
                nav !== "All" &&
                setCategory(nav === "Today's Deals" ? "All" : nav)
              }
              style={{
                background: "none",
                border: "1.5px solid transparent",
                color: "#fff",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: 13,
                whiteSpace: "nowrap",
                borderRadius: 2,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "1.5px solid #fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "1.5px solid transparent")
              }
            >
              {nav === "Prime" ? "🔵 Prime" : nav}
            </button>
          ))}
        </div>
      </header>

      {/* HERO BANNER */}
      {search === "" && category === "All" && (
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              background: banner.bg,
              padding: "40px 60px",
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "all 0.5s",
            }}
          >
            <div style={{ fontSize: 48 }}>{banner.emoji}</div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#fff",
                marginBottom: 6,
              }}
            >
              {banner.title}
            </div>
            <div
              style={{
                fontSize: 16,
                color: banner.accent,
                fontWeight: 600,
                marginBottom: 20,
              }}
            >
              {banner.subtitle}
            </div>
            <button
              onClick={() => {}}
              style={{
                width: 180,
                padding: "12px 0",
                background: banner.accent,
                border: "none",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                color: "#0f1111",
              }}
            >
              Shop Now
            </button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              padding: "10px 0",
              background: "#eaeded",
            }}
          >
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIdx(i)}
                style={{
                  width: i === bannerIdx ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  border: "none",
                  background: i === bannerIdx ? "#ff9900" : "#ccc",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: 1400, margin: "0 auto", padding: "16px" }}>
        {/* Filter row */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 14, color: "#555" }}>
            {filtered.length} results {search && `for "${search}"`}{" "}
            {category !== "All" && `in ${category}`}
          </span>
          <div style={{ flex: 1 }} />
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: "5px 14px",
                borderRadius: 20,
                border: `1.5px solid ${c === category ? "#ff9900" : "#ccc"}`,
                background: c === category ? "#ff9900" : "#fff",
                fontWeight: c === category ? 700 : 400,
                fontSize: 12,
                cursor: "pointer",
                color: "#0f1111",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Deals row */}
        {search === "" && category === "All" && (
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                marginBottom: 12,
                color: "#0f1111",
              }}
            >
              ⚡ Lightning Deals
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                overflowX: "auto",
                paddingBottom: 8,
              }}
            >
              {PRODUCTS.filter(
                (p) =>
                  p.badge === "Deal of the Day" ||
                  p.badge === "Limited Deal" ||
                  p.badge === "Best Seller",
              ).map((p) => {
                const disc = Math.round(
                  ((p.originalPrice - p.price) / p.originalPrice) * 100,
                );
                return (
                  <div
                    key={p.id}
                    onClick={() => setViewProduct(p)}
                    style={{
                      minWidth: 120,
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 36,
                        background: "#f8f8f8",
                        borderRadius: 8,
                        padding: "10px 16px",
                        marginBottom: 6,
                      }}
                    >
                      {p.image}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#cc0c39",
                      }}
                    >
                      {disc}% off
                    </div>
                    <div
                      style={{ fontSize: 11, color: "#888", lineHeight: 1.3 }}
                    >
                      {p.name.slice(0, 22)}…
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={addToCart}
              onView={setViewProduct}
              inCart={inCart(p.id)}
            />
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                padding: "60px 0",
                color: "#888",
                fontSize: 18,
              }}
            >
              😔 No results found. Try a different search or category.
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#232f3e", color: "#fff", marginTop: 32 }}>
        <div
          style={{
            background: "#37475a",
            textAlign: "center",
            padding: "14px 0",
            fontSize: 13,
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to top
        </div>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            padding: "32px 24px",
          }}
        >
          {[
            {
              title: "Get to Know Us",
              links: ["Careers", "Blog", "About Amazon", "Investor Relations"],
            },
            {
              title: "Make Money with Us",
              links: [
                "Sell on Amazon",
                "Become an Affiliate",
                "Advertise Your Products",
                "Self-Publish with KDP",
              ],
            },
            {
              title: "Amazon Payment Products",
              links: [
                "Amazon Pay",
                "Amazon.in Store Card",
                "Reload Your Balance",
                "Currency Converter",
              ],
            },
            {
              title: "Let Us Help You",
              links: [
                "COVID-19 & Amazon",
                "Your Account",
                "Your Orders",
                "Shipping Rates & Policies",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>
                {col.title}
              </div>
              {col.links.map((l) => (
                <div
                  key={l}
                  style={{
                    fontSize: 13,
                    color: "#ccc",
                    marginBottom: 6,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                >
                  {l}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid #4a5568",
            textAlign: "center",
            padding: 16,
            fontSize: 12,
            color: "#aaa",
          }}
        >
          amazon<span style={{ color: "#ff9900" }}>.in</span> · Amazon Clone
          Project · Built with React & ❤️ for B.Tech CSE
        </div>
      </footer>

      {/* CART DRAWER */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQtyChange={changeQty}
        />
      )}

      {/* PRODUCT MODAL */}
      {viewProduct && (
        <ProductModal
          product={viewProduct}
          onClose={() => setViewProduct(null)}
          onAdd={addToCart}
          inCart={inCart(viewProduct.id)}
        />
      )}
    </div>
  );
}
