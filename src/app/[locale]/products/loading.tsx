export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-s2pi-background-body">
      {/* Header placeholder */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96"></div>
          </div>
        </div>
      </div>

      {/* Products grid placeholder */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="animate-pulse">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-r from-s2pi-blue/20 to-s2pi-red/20"></div>
                
                {/* Content placeholder */}
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-10 bg-s2pi-red/20 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-s2pi-text-secondary">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-s2pi-red"></div>
            <span className="font-roboto">Chargement des produits S2PI...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
