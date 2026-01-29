export interface ProjectFeature {
  category: string;
  iconName: string;
  items: string[];
}

export interface TechnicalHighlight {
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  category: string;
  items: { name: string; detail: string }[];
}

export interface ProjectDetail {
  projectId: number;
  role: string;
  company: string;
  companyUrl: string | null;
  timeline: string;
  location: string;
  overview: string;
  keyMetrics: { label: string; value: string }[];
  problem: string[];
  solution: string[];
  features: ProjectFeature[];
  technicalHighlights: TechnicalHighlight[];
  architecture: ArchitectureLayer[];
  results: { value: string; label: string }[];
  journey: string[];
}

export const projectDetailsData: Record<number, ProjectDetail> = {
  0: {
    projectId: 0,
    role: "Full-Stack Developer (Solo)",
    company: "Ezyfusion Group Sdn Bhd",
    companyUrl: null,
    timeline: "September 2024 - Present",
    location: "Melaka, Malaysia",
    overview:
      "TenancyPilot is a production-grade SaaS platform that I built from scratch for a Malaysian property management company. It serves as their central operating system — managing properties, tenants, leases, rent collection, maintenance, and financial reporting through a unified platform. The system features dual portals (staff and tenant) with role-based access control, integrated online payment processing via Billplz, and automated workflows for recurring payments and notifications.",
    keyMetrics: [
      { label: "Active Users", value: "200+" },
      { label: "API Endpoints", value: "116+" },
      { label: "Database Tables", value: "60+" },
      { label: "Development", value: "Solo" },
    ],
    problem: [
      "The property management company was relying on a patchwork of disconnected tools — spreadsheets for tenant records, manual bank transfers for rent collection, WhatsApp messages for maintenance requests, and paper-based lease agreements. This fragmented workflow led to persistent problems: payments were missed or incorrectly tracked, maintenance requests fell through the cracks, and there was no centralized view of occupancy, financials, or tenant history.",
      "As their portfolio grew, these manual processes became unsustainable. They needed a purpose-built digital platform that could handle the full lifecycle of property management — from tenant onboarding to automated rent collection — without requiring them to switch between multiple disconnected systems.",
    ],
    solution: [
      "I designed and built TenancyPilot as a comprehensive, multi-portal SaaS platform that digitizes every aspect of their property management operations. The staff portal gives property managers full control over properties, tenants, leases, and finances with configurable role-based access control. The tenant portal enables tenants to view their rental agreements, make payments online, and submit maintenance tickets.",
      "Key architectural decisions shaped the platform: a computed lease status system that separates database state from runtime state for flexibility, a 6-status payment engine that calculates payment state from multiple data points (amount paid, due dates, payment history), and integration with Billplz — Malaysia's leading payment gateway — enabling tenants to pay rent online through FPX bank transfers.",
    ],
    features: [
      {
        category: "Property & Room Management",
        iconName: "Building2",
        items: [
          "Full CRUD operations for properties with image uploads and client-side compression",
          "Room-level management with individual amenity tracking (WiFi, AC, cleaning, etc.)",
          "Project-based property grouping for portfolio organization",
          "Property status tracking: Ready, Occupied, Under Maintenance",
          "Bulk property import functionality",
        ],
      },
      {
        category: "Tenant Management",
        iconName: "Users",
        items: [
          "Dual tenant types: Individual (personal details, ID) and Company (registration, contact person)",
          "Tenant invitation system for portal access with email verification",
          "Profile management with identity verification fields",
          "Tenant status tracking: Renting, Booking, Pending Refund, Not Renting",
          "Tenant screening and evaluation tools",
        ],
      },
      {
        category: "Lease Lifecycle",
        iconName: "FileText",
        items: [
          "Lease creation with flexible duration options and monthly rent configuration",
          "Runtime lease status computation: Scheduled, Current, Expired, Ended",
          "Lease transfers between properties or rooms with full history tracking",
          "Scheduled rent changes and future adjustments",
          "Configurable late payment charges (per X days overdue)",
          "Automated expiry, payment, and overdue reminders",
        ],
      },
      {
        category: "Smart Payment System",
        iconName: "CreditCard",
        items: [
          "6 computed payment statuses: Paid, Paid Late, Pending, Partially Paid, Overdue, Cancelled",
          "Automatic recurring payment generation upon previous payment completion",
          "Billplz payment gateway integration for online FPX bank transfers",
          "Multi-charge payments with individual tax support (8% SST)",
          "Payment evidence and receipt uploads",
          "Comprehensive payment history and transaction tracking",
        ],
      },
      {
        category: "Staff & Access Control",
        iconName: "Shield",
        items: [
          "Role-based access control (RBAC) with configurable permissions",
          "Module-level and action-level permission granularity",
          "Organization-level data isolation across all tables",
          "Staff hierarchy tracking and management",
          "Dedicated staff onboarding flow",
        ],
      },
      {
        category: "Maintenance & Tasks",
        iconName: "Wrench",
        items: [
          "Ticket system: Maintenance, Complaint, Billing, Aircon, and custom types",
          "Task management with priority levels (Low, Medium, High, Urgent)",
          "Assignment workflows for staff with assigner tracking",
          "Task comments and completion reports",
          "Property and room context linking",
        ],
      },
      {
        category: "Notifications & Notices",
        iconName: "Bell",
        items: [
          "Automated notification center with read/unread tracking",
          "Configurable announcement system with audience targeting",
          "Target options: All users, Staff only, Tenants only, Tenants with overdue payments",
          "Payment and lease reminder scheduling",
        ],
      },
    ],
    technicalHighlights: [
      {
        title: "Payment Status Engine",
        description:
          "Designed a centralized payment transformation utility that computes 6 possible payment statuses from multiple data points — payment history records, due dates, amounts, and cancellation state. The engine handles edge cases like partial payments crossing due dates, late full payments, and multi-charge breakdowns with individual tax calculations.",
      },
      {
        title: "Lease Status Computation",
        description:
          "The database stores only two states (Current/Ended) while the application computes four display states (Scheduled/Current/Expired/Ended) at runtime based on start and end dates. This separation keeps the database simple while providing rich status information in the UI without requiring scheduled jobs to update statuses.",
      },
      {
        title: "Paginated Search with Caching",
        description:
          "Built a custom React hook that manages server-side pagination with client-side page caching via Map, URL state synchronization through nuqs for bookmarkable pages, 500ms debounced search, and stale response protection that tracks the intended search term to prevent race conditions from outdated API responses.",
      },
      {
        title: "Billplz Payment Gateway",
        description:
          "Integrated Malaysia's Billplz payment processor for FPX bank transfers. Implemented HMAC-SHA256 webhook signature verification, payment-to-bill reference tracking, and automatic payment status synchronization upon webhook confirmation. The integration handles the full payment lifecycle from bill creation to confirmation.",
      },
      {
        title: "Multi-Tenant Architecture",
        description:
          "Enforced organization-level data isolation across 60+ database tables. Every API query filters by the authenticated user's organization_id, ensuring strict data boundaries. The system uses a dual-schema approach — Supabase's auth schema for authentication and a public schema for application data.",
      },
      {
        title: "Recurring Payment Generation",
        description:
          "Implemented an automatic payment generation system that creates the next payment record upon completion of the current one. Supports configurable intervals (monthly, weekly, custom), clones charges from the previous payment, and generates unique reference IDs following a structured pattern.",
      },
    ],
    architecture: [
      {
        category: "Frontend",
        items: [
          { name: "Next.js", detail: "App Router, React 19" },
          { name: "TypeScript", detail: "Strict type safety" },
          { name: "Tailwind CSS", detail: "Utility-first styling" },
          { name: "shadcn/ui", detail: "Component library" },
          { name: "TanStack Table", detail: "Data tables" },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Next.js API Routes", detail: "116+ endpoints" },
          { name: "Prisma ORM", detail: "Type-safe queries" },
          { name: "Supabase Auth", detail: "SSR authentication" },
          { name: "Billplz API", detail: "Payment processing" },
        ],
      },
      {
        category: "Database",
        items: [
          { name: "PostgreSQL", detail: "Primary database" },
          { name: "60+ Tables", detail: "Comprehensive schema" },
          { name: "Multi-Schema", detail: "Auth + Public" },
          { name: "Row-Level Security", detail: "Data isolation" },
        ],
      },
      {
        category: "Infrastructure",
        items: [
          { name: "Supabase", detail: "Auth, Storage, DB" },
          { name: "Billplz", detail: "Payment gateway" },
          { name: "pg_cron", detail: "Scheduled jobs" },
        ],
      },
    ],
    results: [
      { value: "200+", label: "Active Users" },
      { value: "116+", label: "API Endpoints" },
      { value: "60+", label: "Database Tables" },
      { value: "27+", label: "Frontend Pages" },
    ],
    journey: [
      "TenancyPilot was a defining project in my career — my first major production SaaS that real users depend on daily. I was given full ownership from day one: system design, database architecture, API development, frontend implementation, and deployment.",
      "Building a financial system taught me that domain logic is unforgiving. Payment calculations need to be precise, status computations must handle every edge case, and data isolation between organizations is not optional. I learned to separate business logic from persistence (like the lease status computation) and to centralize complex transformations (like the payment status engine) to prevent inconsistencies.",
      "Working directly with the property management company meant shipping features they could use immediately, collecting feedback, and iterating fast. This project shaped how I think about software — not as code to write, but as problems to solve for real people.",
    ],
  },
  1: {
    projectId: 1,
    role: "Full-Stack Developer (Solo)",
    company: "Personal Project",
    companyUrl: null,
    timeline: "October 2024 - Present",
    location: "Malaysia",
    overview:
      "Leafloat is a modern restaurant point-of-sale system built to handle the full operational lifecycle of a food service business. It covers order creation (dine-in and takeaway), kitchen workflow management via a live Kitchen Display System, a flexible discount engine supporting promo codes and buy-X-get-Y promotions, a customer loyalty program, and multi-method payment processing — all within a single unified interface designed for speed and accuracy during service.",
    keyMetrics: [
      { label: "Order Modes", value: "2" },
      { label: "Discount Types", value: "3" },
      { label: "Payment Methods", value: "3" },
      { label: "KDS Columns", value: "4" },
    ],
    problem: [
      "Most restaurant POS solutions available are either overpriced SaaS subscriptions with features locked behind paywalls, or outdated legacy systems with clunky interfaces that slow down service. Smaller restaurants often end up using generic tools — spreadsheets for tracking orders, separate apps for inventory, and manual calculations for discounts and loyalty — creating a fragmented workflow that leads to errors during peak hours.",
      "I wanted to build a POS system that a restaurant could actually use end-to-end: from the moment a customer walks in and sits at a table, through ordering, kitchen preparation, payment, and loyalty tracking — all in one fast, modern interface without the complexity tax of enterprise solutions.",
    ],
    solution: [
      "I designed Leafloat as a single-page application with a multi-step order flow that mirrors how a real restaurant operates. The system starts with order type selection (dine-in or takeaway), moves through table assignment and guest info for dine-in orders, then into an item selection interface with support for variants, addons, and special notes. Orders flow directly into a three-column Kitchen Display System where kitchen staff manage preparation status in real-time.",
      "The discount engine was a particular focus — it supports percentage-based and fixed-amount promo codes with minimum spend requirements, as well as buy-X-get-Y promotions with variant-aware matching. Combined with a configurable loyalty points program and multi-method payment processing (cash with change calculation, bank transfer with reference tracking), the system covers the full revenue cycle.",
    ],
    features: [
      {
        category: "POS Order Management",
        iconName: "ShoppingCart",
        items: [
          "Multi-step order flow: order type → table selection → item selection → payment",
          "Dine-in and takeaway modes with table assignment for dine-in orders",
          "Menu items with configurable variants (sizes) and individual pricing",
          "Combo items with fixed or variant-specific sub-item configurations",
          "Addons system with variant support and independent pricing",
          "Real-time order total calculation with tax, discounts, and addon costs",
        ],
      },
      {
        category: "Kitchen Display System",
        iconName: "Monitor",
        items: [
          "Live three-column display: Pending → In Kitchen → Ready",
          "Served tab for completed order history and tracking",
          "Order status progression with single-click advancement",
          "Full order detail viewing with items, variants, addons, and notes",
          "Recall functionality to move orders back to previous status",
          "Real-time updates across all connected displays",
        ],
      },
      {
        category: "Discount Engine",
        iconName: "Tag",
        items: [
          "Promo codes with percentage-based or fixed-amount discounts",
          "Buy-X-Get-Y promotions with variant-aware item matching",
          "Minimum order cost requirements and maximum cap limits",
          "Category-level or item-level discount targeting",
          "Recurring schedules: daily, weekly, or monthly activation",
          "Usage limits per customer and total usage tracking",
        ],
      },
      {
        category: "Payment Processing",
        iconName: "CreditCard",
        items: [
          "Three payment methods: cash, bank transfer, and card",
          "Cash payments with automatic change calculation",
          "Bank transfer with transaction reference ID tracking",
          "Payment validation ensuring amount matches order total",
          "Receipt generation with PDF export and print support",
          "Payment history linked to orders for full audit trail",
        ],
      },
      {
        category: "Customer & Loyalty",
        iconName: "Users",
        items: [
          "Customer directory with name, phone, and email records",
          "Configurable loyalty points program with min spend thresholds",
          "Points calculation with configurable rates and rounding modes",
          "Maximum points per order cap and expiry date configuration",
          "Transaction history: earned, redeemed, expired, and adjusted",
          "Customer order statistics and loyalty balance tracking",
        ],
      },
      {
        category: "Menu & Inventory",
        iconName: "UtensilsCrossed",
        items: [
          "Menu item CRUD with category classification (Appetizers, Mains, Sides, Drinks, Desserts, Combos)",
          "Variant management with independent pricing per size",
          "Combo builder for fixed combos and variant-specific combos",
          "Addon management with variant support and availability toggling",
          "Duplicate name prevention and search/filter by category",
          "Availability status toggling for items and addons",
        ],
      },
    ],
    technicalHighlights: [
      {
        title: "Multi-Step Order State Machine",
        description:
          "The POS order flow operates as a state machine persisted in sessionStorage, allowing recovery if the user navigates away mid-order. Each step (order type, table selection, guest info, item selection) validates before advancing, and the entire session is reconstructable from stored state.",
      },
      {
        title: "Discount Calculation Engine",
        description:
          "Built a dual-mode discount engine that handles promo codes and buy-X-get-Y promotions with different calculation paths. Promo codes filter applicable items by category or ID, calculate percentage or fixed discounts with max cap enforcement. Buy-X-Get-Y matching verifies item quantities considering variants, then calculates the free item value as the discount amount.",
      },
      {
        title: "Real-Time Order Total Pipeline",
        description:
          "Order totals are computed through a pipeline: base item prices with variant selection → addon costs per item → subtotal aggregation → discount application → tax calculation (10% on post-discount amount) → final total. Every modification triggers a full recalculation to ensure consistency.",
      },
      {
        title: "TanStack Router File-Based Routing",
        description:
          "Leveraged TanStack Router's file-based routing for type-safe navigation across all modules. Route definitions are auto-generated from the file structure, providing compile-time route validation and type-safe link components that prevent broken navigation.",
      },
      {
        title: "Loyalty Points System",
        description:
          "Implemented a configurable loyalty program with minimum spend thresholds, per-RM point rates, max-per-order caps, and three rounding modes (down, nearest, up). Each transaction creates an audit record with running balance, and points can expire based on configurable monthly periods.",
      },
      {
        title: "Receipt Generation Pipeline",
        description:
          "Built a receipt system using html2canvas for DOM-to-image conversion and jsPDF for PDF generation. The receipt dialog renders a formatted order summary that can be printed directly or exported as a PDF document with full order details, payment information, and transaction references.",
      },
    ],
    architecture: [
      {
        category: "Frontend",
        items: [
          { name: "React 19", detail: "Latest React with concurrent features" },
          { name: "TypeScript", detail: "Strict type safety throughout" },
          { name: "TanStack Router", detail: "File-based type-safe routing" },
          { name: "TanStack Query", detail: "Server state & cache management" },
          { name: "Tailwind CSS", detail: "Utility-first styling" },
          { name: "Radix UI", detail: "Accessible component primitives" },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "Hono", detail: "Lightweight web framework" },
          { name: "Bun", detail: "Fast JavaScript runtime" },
          { name: "Supabase Auth", detail: "JWT authentication" },
          { name: "REST API", detail: "CRUD endpoints" },
        ],
      },
      {
        category: "Database",
        items: [
          { name: "PostgreSQL", detail: "Via Supabase" },
          { name: "Row-Level Security", detail: "Multi-tenant isolation" },
          { name: "Relational Schema", detail: "Normalized tables with FKs" },
        ],
      },
      {
        category: "Tooling",
        items: [
          { name: "Vite", detail: "Fast build & HMR" },
          { name: "Vitest", detail: "Unit testing framework" },
          { name: "Framer Motion", detail: "UI animations" },
          { name: "Sonner", detail: "Toast notifications" },
        ],
      },
    ],
    results: [
      { value: "6", label: "Order Statuses Managed" },
      { value: "3", label: "Payment Methods" },
      { value: "10+", label: "Core Modules" },
      { value: "< 1s", label: "Order Processing" },
    ],
    journey: [
      "Leafloat started as a challenge to myself: could I build a POS system that I'd actually want to use if I ran a restaurant? I'd seen how slow and frustrating most restaurant POS software is — cashiers clicking through endless menus, kitchen staff squinting at printed tickets, managers juggling separate systems for discounts and loyalty. I wanted to prove that a single developer could build something better with modern tools.",
      "The discount engine was the most complex part to get right. Supporting both promo codes and buy-X-get-Y promotions meant building two completely different calculation paths that both needed to integrate cleanly with the order total pipeline. Getting variant-aware matching for buy-X-get-Y (where buying a 'Large Chicken Burger' should match a rule targeting 'Chicken Burger') required careful logic to avoid false positives while still being flexible.",
      "This project pushed my frontend architecture skills significantly — managing complex multi-step flows with session persistence, building real-time calculation pipelines that stay consistent across dozens of interactions, and designing a Kitchen Display System that kitchen staff could actually use under pressure. It's the kind of project where every feature touches three others, and getting that orchestration right is the real engineering challenge.",
    ],
  },
};
