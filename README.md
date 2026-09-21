# 🏛️ BetterRoxas (Roxas City)

A community-led, open-source portal designed to make the government of the **City of Roxas, Capiz** accessible, transparent, and user-friendly.

This project is a city-focused portal part of [BetterGov.ph](https://bettergov.ph), adapted to meet the specific needs of Roxas City residents.

---
### Inspirations

BetterGov.PH https://github.com/bettergovph/bettergov
BetterSolano.org https://github.com/BetterSolano/bettersolano
Betterlocalgov https://github.com/iyanski/betterlocalgov

### Portal Features
BetterRoxas provides Roxas City with:
- **Public Services Directory**: Comprehensive guide to city services with requirements, fees, and step-by-step processes
- **Legislative Portal**: Access to ordinances, resolutions, and executive orders from the Sangguniang Panlungsod
- **Transparency Dashboard**: Financial data, procurement bids, and infrastructure projects
- **Government Directory**: Contact information for all city departments and officials
- **Multi-language Support**: English and Filipino translations

---

## 🔄 Forking for Your LGU

BetterLB is designed to be easily adapted for any Local Government Unit (LGU) in the Philippines.

## Quick Start for Other LGUs

1. **Edit Configuration**: Update `/config/lgu.config.json` with your LGU details
2. **Update Translations**: Modify `/public/locales/en/common.json` for LGU-specific text
3. **Add Your Data**: Replace data files in `/src/data/` with your municipality's information
4. **Build and Test**: Run `npm install && npm run build`

### Configuration Files to Edit

| File | What to Change |
|------|------------------|
| `/config/lgu.config.json` | All LGU settings (name, province, coordinates, branding, transparency config) |
| `/public/locales/en/common.json` | UI text strings (hero title, footer copyright, government section) |
| `/src/data/directory/departments.json` | Municipal departments and offices |
| `/src/data/directory/barangays.json` | Barangay information |
| `/src/data/services/categories/*.json` | Public services data by category |

### Key Configuration Fields

| Field | Description | Example (Roxas City) |
|-------|-------------|---------------------|
| `lgu.name` | Short city name | "Roxas City" |
| `lgu.fullName` | Full official name | "City of Roxas" |
| `lgu.province` | Province name | "Capiz" |
| `lgu.region` | Region name | "Region VI" |
| `lgu.regionCode` | Region code | "Western Visayas" |
| `lgu.type` | LGU type | "city" |
| `lgu.officialWebsite` | Official LGU website | "https://roxascity.gov.ph" |
| `portal.name` | Portal name | "BetterRoxas" |
| `portal.baseUrl` | Portal base URL | "https://betterroxas.org" |
| `portal.tagline` | Portal tagline | "Community Powered Roxas City Portal" |

**Note:** See [`FORKING.md`](./FORKING.md) for comprehensive forking instructions including database setup for legislative data.

## Technical Stack
*   **Frontend**: React 19, Vite, TypeScript (Strict mode)
*   **Styling**: Tailwind CSS v4 (CSS variables, high-contrast tokens)
*   **Design System**: @bettergov/kapwa (semantic tokens, component library)
*   **Backend**: Cloudflare Pages Functions (TypeScript)
*   **Deployment**: Wrangler 4.70.0 (pinned for compatibility)
*   **Data**: Structured JSON (Modular category-based architecture)
*   **Search**: Meilisearch with Fuse.js fuzzy search
*   **Localization**: i18next with English & Filipino support
*   **Maps**: Leaflet for geospatial visualizations
*   **Data Pipeline**: Python scripts for legislative document processing
*   **Testing**: Playwright (E2E tests across multiple browsers)
*   **Code Quality**: ESLint, Prettier, Husky pre-commit hooks
*   **Security**: Undici 8.0.2 (pinned for security fixes)

---

## Project Structure

```
betterlb/
├── e2e/                         # End-to-end tests
│   └── utils/                   # Test helpers and shared testing logic
├── functions/                   # Serverless / backend functions (Cloudflare Pages)
│   └── api/                     # API endpoints and handlers
├── pipeline/                    # Data processing pipeline (Python side)
│   ├── data/                    # Structured source documents
│   │   └── pdfs/                # Source legislative PDFs
│   │       ├── executive_orders/
│   │       ├── ordinances/
│   │       └── resolutions/
│   └── __pycache__/             # Python cache (auto-generated)
├── public/                      # Static public assets
│   ├── assets/                  # General media assets
│   ├── locales/                 # Translation files (en, fil)
│   └── logos/                   # Logo exports
├── raw_data/                    # Unprocessed data before pipeline cleanup
├── scripts/                     # Automation, maintenance, and build scripts
├── src/                         # Main application source code
│   ├── components/              # Reusable UI components
│   │   ├── data-display/        # Tables, cards, and record viewers
│   │   ├── home/                # Homepage-specific components
│   │   ├── layout/              # Layout wrappers, grids, headers, footers
│   │   ├── map/                 # Map visualizations and geospatial UI
│   │   ├── navigation/          # Menus, navbars, breadcrumbs
│   │   ├── search/              # Search bars, filters, query UI
│   │   ├── ui/                  # Generic UI elements (buttons, modals, etc.)
│   │   └── widgets/             # Small reusable info widgets
│   ├── constants/               # App-wide constant values and config
│   ├── data/                    # Structured frontend data layer
│   │   ├── about/               # About page content
│   │   ├── directory/           # Government directory datasets
│   │   │   └── schema/          # Data schemas for directory records
│   │   ├── legislation/         # Legislative data
│   │   │   ├── committees/
│   │   │   ├── documents/
│   │   │   │   └── sb_12/       # Session-specific legislative docs
│   │   │   ├── persons/         # Councilors, authors, sponsors
│   │   │   ├── sessions/        # Legislative sessions
│   │   │   │   └── sb_12/
│   │   │   └── term/            # Term metadata
│   │   ├── schema/              # Global data schemas
│   │   ├── services/            # Public service datasets
│   │   │   └── categories/      # Service classifications
│   │   ├── statistics/          # Municipality statistics datasets
│   │   └── transparency/        # Transparency and governance data
│   ├── hooks/                   # Custom reusable frontend hooks
│   ├── i18n/                    # Internationalization setup and config
│   │   ├── languages.ts         # Language definitions (English, Filipino)
│   │   └── README.md            # Translation guide
│   ├── lib/                     # Utility libraries and helpers
│   ├── pages/                   # Route-level pages (site sections)
│   │   ├── about/
│   │   ├── accessibility/
│   │   ├── contribute/
│   │   ├── data/                # Open data portal pages
│   │   ├── government/          # Government structure pages
│   │   │   ├── barangays/
│   │   │   ├── departments/
│   │   │   ├── elected-officials/
│   │   │   └── executive/
│   │   ├── legislation/         # Legislative portal for Ordinances/Resolutions/Executive Orders
│   │   ├── services/            # Public services portal
│   │   ├── sitemap/             # Human-readable sitemap
│   │   ├── statistics/          # Statistics portal
│   │   └── transparency/        # Transparency portal
│   │       ├── bids/
│   │       ├── components/
│   │       ├── financial/
│   │       ├── infrastructure/
│   │       └── procurement/
│   └── types/                   # Type definitions (TypeScript or schemas)
└── (root config files)          # package.json, build configs, .env files
```

### Key Components
- **Service Directory**: Categorized services from `src/data/services/categories/`
- **Legislative Portal**: Ordinances, resolutions, executive orders with document parsing
- **Transparency Portal**: Financial data, procurement, bids, infrastructure projects
- **Search Integration**: Meilisearch-powered search with real-time indexing
- **Internationalization**: Multi-language support with i18next

### Roxas City-Specific Data
BetterRoxas includes structured data for Roxas City:

| Data Type | Location | Description |
|-----------|----------|-------------|
| **Departments** | `/src/data/directory/departments.json` | City departments and offices with direct contact info |
| **Barangays** | `/src/data/directory/barangays.json` | 47 official barangay profiles and councils |
| **Services** | `/src/data/services/categories/*.json` | Public services by category (BPLO, Civil Registry, City Engineering, etc.) |
| **Citizens Charter** | `/src/data/citizens-charter/citizens-charter.json` | Service requirements, processing times, and steps |
| **Legislation** | Cloudflare D1 Database | Ordinances, resolutions, and executive orders |
| **Statistics** | `/src/data/statistics/` | City demographics, CMCI competitiveness, and BLGF financials |

---

## 🚀 How to Run Locally

### 1. Clone and Install
```bash
git clone https://github.com/BetterWesternVisayas/betterwesternvisayas.github.io
cd betterwesternvisayas.github.io
npm install
```

### 2. Prepare Data
Since the service directory is split into category files, merge them before running:
```bash
python3 scripts/merge_services.py
```

### 3. Start Development Server
```bash
npm run dev
```
**Access the portal at:** `http://localhost:5173`

### 4. Running Tests & Quality Checks
```bash
npm run test            # Run unit tests
npm run lint            # Check code quality
npm run format          # Format code with Prettier
```

### 5. Building for Production
```bash
npm run build           # TypeScript check, service merge, and Vite build
```

---

## 🏛️ Roxas City Government Structure

### Executive Branch
- **City Mayor**: Ronnie T. Dadivas - Chief executive officer of the City of Roxas
- **City Vice Mayor**: Teresa H. Almalbis - Presiding officer of the Sangguniang Panlungsod
- **City Administrator**: Love Angeline L. Dadivas - Chief administrative coordinator
- **City Departments**: 30+ specialized offices implementing city services, disaster response, and welfare

### Legislative Branch (Sangguniang Panlungsod)
The Sangguniang Panlungsod is the legislative body of Roxas City, composed of:
- **City Vice Mayor** (Presiding Officer)
- **10 Regular City Councilors**
- **Ex-Officio Councilors** (Liga ng mga Barangay President & SK Federation President)

### Key Departments
- **BPLO**: Business Permit and Licensing Office (BOSS Center)
- **CTO**: City Treasurer's Office (Revenues, Amilyar, Cedula)
- **City Assessor's Office**: Real property assessment and taxation
- **City Engineering Office / OBO**: Building permits and public works
- **CPDO**: City Planning and Development Office
- **LCRO**: Local Civil Registry Office (Birth, Marriage, Death certificates)
- **City Health Office**: Primary healthcare, diagnostic laboratory, and animal bite center
- **City Agriculture Office**: Fisherfolk and crop farmer assistance
- **CENRO**: City Environment & Natural Resources Office (waste management & coastal greenbelt)
- **CSWDO**: City Social Welfare & Development Office (crisis assistance, solo parents)

---

## Join the Grassroots Movement
We are looking for volunteers and passionate individuals who want to make Roxas City a better place. You don't need to be a developer to help!

### How You Can Contribute:
1.  **Non-Developers**: Visit the `/contribute` page on the live site to suggest new services or fix outdated information via GitHub Issues (requires a free GitHub account).
2.  **Developers**: Check the [Issues](https://github.com/BetterLosBanos/betterlb/issues) tab for "Help Wanted" or "Good First Issue" labels.
3.  **Data Auditors**: Help us verify community submissions on GitHub to ensure the portal remains an authoritative source of information.
4.  **Translators**: Help translate the portal to Filipino and other Philippine languages by working on `public/locales/` files.

### Development Workflow
- Follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced via commitlint)
- All PRs run ESLint and Prettier automatically
- E2E tests run on CI to ensure cross-browser compatibility

---

## 🚢 Deployment

### Production Deployment (BetterLB)

BetterLB is deployed on **Cloudflare Pages** with:
- **Frontend**: Vite build automatically deployed on push to `main` branch
- **Backend**: Cloudflare Pages Functions for API endpoints
- **Database**: Cloudflare D1 (`betterlb_openlgu`) for legislative data
- **Search**: Meilisearch instance for fuzzy search
- **KV Storage**: Weather data caching with automatic updates
- **Wrangler**: Version 4.70.0 (pinned for compatibility)

### Deployment for Other LGUs

When deploying for your own LGU:

1. **Cloudflare Pages**: Connect your GitHub repository
2. **Environment Variables**: Configure your D1 database binding
3. **Custom Domain**: Set up your custom domain (e.g., `betterlgu.gov.ph`)
4. **Database Migration**: Run database migrations on remote D1 instance
5. **Meilisearch**: Deploy your own Meilisearch instance or use alternative search

**Note:** The deployment workflow uses Wrangler 4.70.0 (pinned in both `.github/workflows/deploy.yml` and `package.json`). If upgrading, ensure compatibility with the Wrangler Action and test thoroughly.

See [`ARCHITECTURE.md`](./ARCHITECTURE.md#deployment) for detailed deployment strategies.

## License and Data Sources

### Code License
This project is released under the [Creative Commons CC0](https://creativecommons.org/publicdomain/zero/1.0/) dedication. The work is dedicated to the public domain and can be freely used, modified, and distributed without restriction.

### Data Attribution
BetterRoxas aggregates data from multiple sources:

| Data Source | Type | Attribution |
|-------------|------|-------------|
| **City Government of Roxas** | Official government data, services directory | Public domain |
| **Philippine Statistics Authority (PSA)** | Census and demographic data | Republic of the Philippines |
| **Bureau of Local Government Finance (BLGF)** | SRE and annual regular income reports | Republic of the Philippines |
| **Philippine Government Procurement Portal (PhilGEPS)** | Procurement bids and awards | Republic of the Philippines |
| **Department of Budget and Management (DBM)** | Financial releases | Republic of the Philippines |
| **Department of Public Works and Highways (DPWH)** | Infrastructure projects | Republic of the Philippines |

**Note**: Data is presented as-is and may not reflect real-time updates. Always verify with official LGU sources.

---

## 📞 Contact and Community

### For Roxas City Residents
- **Website**: https://betterroxas.org
- **Live Deployment**: https://betterwesternvisayas.github.io/
- **GitHub Issues**: Report suggestions or submit information updates at our repository
- **Community**: Join our civic volunteers via the "Contribute" page on the portal

### For Other LGUs
- **Forking Guide**: See [`FORKING.md`](./FORKING.md) for detailed instructions
- **Architecture**: See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for system design
- **Documentation**: See [`docs/`](./docs/) for comprehensive guides
