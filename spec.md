# AK Thumbnail Studio

## Current State
New project. Empty backend and frontend scaffold.

## Requested Changes (Diff)

### Add
- Multi-page React SPA: Home, Gallery, Pricing, About, Contact, Order
- Navigation header with logo and links
- Hero section with headline and CTA
- Services section (4 services with icons)
- Portfolio/gallery grid with hover zoom effects (6–12 sample thumbnails)
- Testimonials section with star ratings
- CTA banner
- Footer with contact info and social links
- Order form: Name, Email, Video Link/Topic, Style (dropdown), Thumbnail Text, Reference Image upload (optional), Delivery Time, Payment Option
- Thank-you confirmation after order submission
- Pricing page: Basic/Standard/Premium packages with highlighted popular plan
- About page with studio intro, owner/workspace placeholder, achievements
- Contact page: form + WhatsApp/Telegram buttons + social links
- FAQ section on homepage or dedicated section
- Backend: store orders and contact messages
- Mobile-responsive design

### Modify
- None

### Remove
- None

## Implementation Plan
1. Backend: order storage (submitOrder, getOrders), contact message storage (submitContact, getContacts)
2. Frontend: React SPA with React Router, pages for Home/Gallery/Pricing/About/Contact/Order
3. Color scheme: red (#E53E3E), orange (#ED8936), yellow (#F6E05E) accents on dark/white backgrounds
4. Gallery: grid with placeholder images and hover zoom
5. Order form wired to backend submitOrder
6. Contact form wired to backend submitContact
7. Responsive layout with mobile nav menu
