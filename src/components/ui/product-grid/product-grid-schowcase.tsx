
import { S2PIProductGrid, type ProductGridItem } from "@/components/ui/product-grid/ui-grid/s2pi-product-grid"

// Create a data URL for placeholder images to avoid 404 errors
const createPlaceholderImage = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${encodedText}%3C/text%3E%3C/svg%3E`;
};

const acousticSolutionsData: ProductGridItem[] = [
  {
    id: "farbocustic",
    title: "FARBOCUSTIC - Revêtement décoratif d'absorption acoustique",
    image: createPlaceholderImage("FARBOCUSTIC"),
    link: "/pdf/farbocustic.pdf",
    buttonText: "En savoir +",
  },
  {
    id: "innospray-fth",
    title: "INNOSPRAY-FTH - Enduit d'isolation acoustique et thermique",
    image: createPlaceholderImage("INNOSPRAY-FTH"),
    link: "/pdf/innospray-fth.pdf",
    buttonText: "En savoir +",
  },
  {
    id: "panneaux-rigides",
    title: "PANNEAUX RIGIDES - Isolation thermique protection incendie",
    image: createPlaceholderImage("PANNEAUX RIGIDES"),
    link: "/pdf/panneaux-rigides.pdf",
    buttonText: "En savoir +",
  },
]

const thermalSolutionsData: ProductGridItem[] = [
  {
    id: "innospray-ffm",
    title: "INNOSPRAY-FFM - Mélange projeté léger",
    image: createPlaceholderImage("INNOSPRAY-FFM"),
    link: "/pdf/innospray-ffm.pdf",
    buttonText: "Télécharger PDF",
  },
  {
    id: "innospray-sc3",
    title: "INNOSPRAY-SC3 - Protection passive contre l'incendie",
    image: createPlaceholderImage("INNOSPRAY-SC3"),
    link: "/pdf/innospray-sc3.pdf",
    buttonText: "Voir détails",
  },
  {
    id: "promapaint-sc4",
    title: "PROMAPAINT-SC4 - Peinture intumescente",
    image: createPlaceholderImage("PROMAPAINT-SC4"),
    link: "/pdf/promapaint-sc4.pdf",
    buttonText: "En savoir +",
  },
  {
    id: "rockwool-panels",
    title: "ROCKWOOL - Panneaux isolants haute performance",
    image: createPlaceholderImage("ROCKWOOL"),
    link: "/pdf/rockwool.pdf",
    buttonText: "Documentation",
  },
]

export function S2PIProductGridShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">S2PI Product Grid Component</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reusable grid component for displaying S2PI products with customizable columns, scroll animations, and
            clickable images and buttons.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Acoustic Solutions (3 Columns)</h2>
          <S2PIProductGrid
            title="ENDUIT D'ISOLATION ACOUSTIQUE & THERMIQUE"
            items={acousticSolutionsData}
            columnsPerRow={3}
            enableScrollAnimation={true}
          />
        </div>

        {/* 4 Columns Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Thermal Solutions (4 Columns)</h2>
          <S2PIProductGrid
            title="SOLUTIONS D'ISOLATION THERMIQUE"
            items={thermalSolutionsData}
            columnsPerRow={4}
            enableScrollAnimation={true}
          />
        </div>

        {/* 2 Columns Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Featured Products (2 Columns)</h2>
          <S2PIProductGrid
            title="PRODUITS VEDETTES"
            items={acousticSolutionsData.slice(0, 2)}
            columnsPerRow={2}
            enableScrollAnimation={true}
          />
        </div>

        {/* Single Column */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Single Product Showcase (1 Column)</h2>
          <S2PIProductGrid
            title="PRODUIT PHARE"
            items={[acousticSolutionsData[0]]}
            columnsPerRow={1}
            enableScrollAnimation={true}
          />
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Usage Examples</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">Basic 3-column grid:</h4>
              <pre className="text-sm text-gray-600 overflow-x-auto">
                {`<S2PIProductGrid
  title="ENDUIT D'ISOLATION ACOUSTIQUE & THERMIQUE"
  items={productData}
  columnsPerRow={3}
  enableScrollAnimation={true}
/>`}
              </pre>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-700 mb-2">Custom click handlers:</h4>
              <pre className="text-sm text-gray-600 overflow-x-auto">
                {`const customItems = [
  {
    id: "custom-1",
    title: "Custom Product",
    image: "/product.jpg",
    link: "/product-page",
    buttonText: "View Details",
    onClick: () => console.log("Custom action!")
  }
]`}
              </pre>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Component Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">📱</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-600">
                Automatically adapts to different screen sizes with optimized column layouts.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">🎬</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Scroll Animations</h4>
              <p className="text-sm text-gray-600">Smooth entrance animations triggered when items come into view.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Highly Customizable</h4>
              <p className="text-sm text-gray-600">
                Configurable columns, custom click handlers, and flexible styling options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default S2PIProductGridShowcase
