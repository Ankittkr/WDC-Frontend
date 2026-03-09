# Faculty Profile – NIT Patna (API Data Integration)

A React-based faculty profile interface that dynamically fetches and presents faculty data from the **NIT Patna public API**.
The project demonstrates **API integration, state management, modular component design, and professional data presentation**.

---
# 🌐 Project Live At

You can view the live deployed project here:

🔗 **Live Demo:**
[https:/faculty-profile/](https://ankittkr.github.io/WDC-Frontend/)

---
# 📌 Task Objective

**Faculty Data Integration**

* Fetch faculty data from the public API:

```
https://admin.nitp.ac.in/api/faculty?type=balaji.cs@nitp.ac.in
```

* Process and format the API response.
* Display the faculty information in a **clean, professional profile layout**.
* Demonstrate:

  * React state management
  * Data fetching
  * Component-based architecture
  * Structured UI presentation

---

# 🚀 Tech Stack

| Technology            | Purpose            |
| --------------------- | ------------------ |
| **React.js**          | Frontend framework |
| **Vite**              | Fast build tool    |
| **JavaScript (ES6+)** | Application logic  |
| **CSS**               | Styling            |
| **REST API**          | Fetch faculty data |

---

# 📂 Project Structure

```
src
│
├── api
│   └── facultyApi.js        # API request logic
│
├── assets                   # Images and static assets
│   ├── campusBanner.png
│   ├── campusFooter.png
│   ├── logo.webp
│
├── components               # UI Components
│   ├── Activity.jsx
│   ├── Footer.jsx
│   ├── HeroBanner.jsx
│   ├── Overview.jsx
│   ├── PageLoader.jsx
│   ├── PaperCard.jsx
│   ├── ProfileCard.jsx
│   ├── ProfileTabs.jsx
│   ├── Projects.jsx
│   ├── Publications.jsx
│   ├── ResearchInnovation.jsx
│   ├── Responsibilities.jsx
│   ├── Tabs.jsx
│   ├── Teaching.jsx
│   │
│   └── helper
│       └── SubSection.jsx
│
├── hooks
│   └── useFaculty.js        # Custom hook for fetching faculty data
│
│
├── App.jsx                  # Root application component
├── main.jsx                 # React entry point
├── App.css
└── index.css
```

---

# ⚙️ Core Functionality

## 1️⃣ API Integration

Faculty data is fetched from the NIT Patna public API.

Example request:

```javascript
https://admin.nitp.ac.in/api/faculty?type=balaji.cs@nitp.ac.in
```

The response contains structured data such as:

* Profile details
* Research interests
* Publications
* Projects
* Teaching activities
* Responsibilities

---

## 2️⃣ Custom Data Fetching Hook

The project uses a **custom React hook** to manage API requests and state.

**File**

```
src/hooks/useFaculty.js
```

Responsibilities:

* Fetch faculty data
* Handle loading state
* Store API response
* Provide reusable data access across components

Example concept:

```javascript
const { profile, publications, projects, research } = useFaculty();
```

---

## 3️⃣ Component-Based UI

The UI is modular and divided into specialized components.

### Main Sections

| Component          | Purpose                          |
| ------------------ | -------------------------------- |
| HeroBanner         | Displays banner and faculty name |
| ProfileCard        | Shows core profile details       |
| Overview           | Faculty introduction             |
| ResearchInnovation | Research interests               |
| Publications       | Research papers                  |
| Projects           | Research projects                |
| Teaching           | Courses taught                   |
| Responsibilities   | Administrative roles             |
| Activity           | Academic activities              |
| Footer             | Page footer                      |

---

## 4️⃣ Tab-Based Navigation

`ProfileTabs` and `Tabs` components organize large data into sections:

* Overview
* Publications
* Projects
* Teaching
* Research
* Activities

This improves **data readability and user experience**.

---


# 🎨 UI Highlights

* Professional **faculty profile layout**
* Banner header with campus imagery
* Card-based publication display
* Tabbed content sections
* Loading state using `PageLoader`
* Responsive component structure

---

# 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo/faculty-profile.git
```

### 2️⃣ Navigate to Project

```bash
cd faculty-profile
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

Application will start on:

```
http://localhost:5173
```

---

# 📡 Example API Data Used

The application extracts and formats data like:

```
profile.name
profile.email
profile.designation
profile.department
profile.research_interest
publications
projects
teaching
activities
```

This data is displayed through various components.

---

# 💡 Key Concepts Demonstrated

✔ REST API integration
✔ Custom React hooks
✔ State management
✔ Component reusability
✔ Data transformation
✔ Professional UI data presentation

---

# 📈 Possible Improvements

* Add **React Query / TanStack Query** for better data fetching
* Add **SEO optimization**
* Add **skeleton loaders**
* Improve **responsive design**
* Add **search/filter for publications**
* Implement **caching for API responses**

---

# 👨‍💻 Author

**Ankit Kumar**

Developer working on modern web applications using **React, Node.js, and MERN stack**.

---

# 📄 License

This project is for **educational / assignment purposes**.





