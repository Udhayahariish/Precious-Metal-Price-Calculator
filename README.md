# 💎 Precious Metal Price Calculator

> **A professional web-based pricing tool for Gold, Silver & Platinum jewellery calculations.**

A modern, laptop-focused jewellery price calculator designed to simplify the process of calculating the final selling price of precious-metal jewellery.

The application allows users to manually enter the current metal price, select purity, specify weight, choose a flexible making-charge method, apply GST, and instantly calculate the final payable amount.

---

## 🌟 Project Overview

Jewellery pricing involves multiple components such as metal value, weight, purity, making charges, and GST.

This project provides a simple and professional interface that brings these calculations together into a single application.

### The calculator supports:

* 🟡 Gold — 24K, 22K & 18K
* ⚪ Silver — 999 & 925
* ⚪ Platinum — multiple purity options
* ⚖️ Weight-based pricing
* 💰 Manual metal-price entry
* 🛠️ Flexible making-charge calculation
* 🧾 GST calculation
* 🧮 Real-time total-price calculation
* 🖨️ Printable quotation
* 📋 Copy calculation results
* 💻 Laptop-first professional interface

> **Note:** The application intentionally uses manual metal-rate entry instead of automatically displaying daily market rates. This allows the shop user to enter the exact rate being used for a transaction.

---

## ✨ Key Features

### 🪙 Multi-Metal Calculator

Calculate jewellery prices for:

| Metal    | Supported Purity    |
| -------- | ------------------- |
| Gold     | 24K, 22K, 18K       |
| Silver   | 999, 925            |
| Platinum | Configurable purity |

---

### 💰 Manual Metal Price

The user can enter the current price manually.

```text
Price per Gram
        ↓
Enter Weight
        ↓
Calculate Metal Value
```

This makes the calculator flexible for shop-specific pricing.

---

### 🛠️ Flexible Making Charges

The application supports three different making-charge methods.

#### 1. Percentage

```text
Making Charge = Metal Value × Making % / 100
```

#### 2. Price Per Gram

```text
Making Charge = Making Price / Gram × Weight
```

#### 3. Fixed Amount

```text
Making Charge = Fixed Making Price
```

The user can choose the method that matches the jewellery item.

---

## 🧮 Calculation Logic

### Step 1 — Metal Value

```text
Metal Value = Metal Price per Gram × Weight
```

### Step 2 — Making Charges

Depending on the selected method:

```text
Percentage:
Metal Value × Making % / 100
```

```text
Per Gram:
Making Price per Gram × Weight
```

```text
Fixed:
Fixed Making Price
```

### Step 3 — Subtotal

```text
Subtotal = Metal Value + Making Charges
```

### Step 4 — GST

```text
GST = Subtotal × GST % / 100
```

### Step 5 — Final Price

```text
Final Amount = Subtotal + GST
```

---

## 🎯 Example Calculation

Suppose:

```text
Metal       : Gold
Purity      : 22K
Rate        : ₹14,220 / gram
Weight      : 10 grams
Making      : 12%
GST         : 3%
```

### Metal Value

```text
₹14,220 × 10
= ₹1,42,200
```

### Making Charges

```text
₹1,42,200 × 12%
= ₹17,064
```

### Subtotal

```text
₹1,42,200 + ₹17,064
= ₹1,59,264
```

### GST

```text
₹1,59,264 × 3%
= ₹4,777.92
```

### Final Amount

```text
₹1,59,264 + ₹4,777.92
≈ ₹1,64,042
```

---

## 🎨 User Interface

The application uses a premium jewellery-inspired visual design featuring:

* Elegant typography
* Luxury-inspired colour palette
* Gold/champagne accents
* Clean calculation cards
* Clear input fields
* Distinct metal selection
* Professional result presentation
* Custom jewellery branding
* KE monogram and flower symbol

The interface is designed primarily for **laptop and desktop shop-counter usage**.

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────┐
                    │      User Input     │
                    │                     │
                    │ Metal Price         │
                    │ Purity              │
                    │ Weight              │
                    │ Making Charge       │
                    │ GST                 │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Calculation Engine │
                    │     JavaScript      │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
        Metal Value      Making Charges       GST
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                    ┌─────────────────────┐
                    │   Final Payable     │
                    │       Amount        │
                    └─────────────────────┘
```

---

## 🛠️ Technologies Used

### Frontend

* **HTML5** — Application structure
* **CSS3** — Styling, layout and visual design
* **JavaScript** — Calculation engine and user interactions
* **SVG** — Logo and decorative graphics
* **PNG** — Jewellery branding assets

### Development Tools

* Visual Studio Code
* Git
* GitHub
* GitHub Pages
* Live Server

---


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/Precious-Metal-Price-Calculator.git
```

### 2. Open the Project

```bash
cd Precious-Metal-Price-Calculator
```

Open the folder in **Visual Studio Code**.

### 3. Run the Application

Open:

```text
index.html
```

You can use the **Live Server** extension in VS Code.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

## 🌐 Deployment

The project can be deployed using **GitHub Pages** because it is a client-side HTML, CSS and JavaScript application.

### GitHub Pages Configuration

```text
Settings
   ↓
Pages
   ↓
Deploy from a branch
   ↓
Branch: main
   ↓
Folder: / (root)
```

After deployment, GitHub provides a public URL for the application.

---

## 🔒 Privacy & Data

This application operates entirely on the client side.

* No backend server is required.
* No customer information is transmitted.
* No database is required.
* Calculations are performed locally in the browser.
* Metal rates are manually entered by the user.

---

## 📌 Important Note

This application is a **calculation and pricing interface**, not a live market-rate service.

Metal prices should be entered according to the shop's current pricing policy before performing a transaction.

GST and other charges should be configured according to the applicable business requirements and regulations.

---

## 🔮 Future Enhancements

Planned improvements may include:

* [ ] Customer quotation generation
* [ ] PDF quotation export
* [ ] Customer details management
* [ ] Jewellery product catalogue
* [ ] Saved quotations
* [ ] Invoice generation
* [ ] WhatsApp quotation sharing
* [ ] Product-wise making charges
* [ ] Admin dashboard
* [ ] Database integration
* [ ] Secure login system
* [ ] Cloud-based rate management
* [ ] Sales and billing history
* [ ] Analytics dashboard

---

## 💡 Real-World Application

This project demonstrates how a frontend application can solve a practical business problem by combining:

```text
Business Requirement
        ↓
User Interface
        ↓
Input Validation
        ↓
Calculation Logic
        ↓
Financial Computation
        ↓
Professional Output
```

It can be adapted for jewellery shops, billing counters, sales teams, and other businesses that require configurable precious-metal pricing.

---

## 👨‍💻 Developer

**Udhaya Hariish K S**

### Areas of Interest

* Data Analytics
* Data Science
* Artificial Intelligence
* Python
* SQL
* Web Development
* Data Visualization

---

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---
