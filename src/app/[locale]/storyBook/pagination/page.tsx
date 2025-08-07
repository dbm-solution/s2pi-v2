"use client";

import React, { useState, useEffect } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination/pagination';
import { Button } from '@/components/ui/text-field/button';

export default function PaginationShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const totalPages = 20;

  useEffect(() => {
    setMounted(true);
  }, []);

  const generatePageNumbers = (current: number, total: number) => {
    const pages = [];
    const maxVisible = 5;
    
    if (total <= maxVisible) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      } else if (current >= total - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = total - 3; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = current - 1; i <= current + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(total);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  if (!mounted) {
    return (
      <div className="p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Pagination Components</h1>
          <div className="text-center py-8">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Pagination Components</h1>
        
        {/* Basic Pagination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Pagination</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Simple Pagination</h3>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">With Ellipsis</h3>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Interactive Pagination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Interactive Pagination</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Dynamic Pagination</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Current page: {currentPage} of {totalPages}
                </p>
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  
                  {pageNumbers.map((page, index) => (
                    <PaginationItem key={index}>
                      {page === 'ellipsis' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page as number);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            <div className="flex gap-4">
              <Button 
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                First Page
              </Button>
              <Button 
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last Page
              </Button>
            </div>
          </div>
        </section>

        {/* Pagination Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Pagination Sizes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Small Pagination</h3>
              <Pagination>
                <PaginationContent className="text-sm">
                  <PaginationItem>
                    <PaginationPrevious href="#" className="text-sm" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="text-sm">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="text-sm">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="text-sm">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="text-sm" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Large Pagination</h3>
              <Pagination>
                <PaginationContent className="text-lg">
                  <PaginationItem>
                    <PaginationPrevious href="#" className="text-lg" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="text-lg">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="text-lg">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="text-lg">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="text-lg" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Pagination Styles */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Pagination Styles</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Rounded Pagination</h3>
              <Pagination>
                <PaginationContent className="gap-1">
                  <PaginationItem>
                    <PaginationPrevious href="#" className="rounded-full" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="rounded-full">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="rounded-full">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="rounded-full">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="rounded-full" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Outlined Pagination</h3>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" className="border" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive className="border">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="border">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className="border">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" className="border" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Real-world Examples</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Product List</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Showing 1-10 of 100 products
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded border">
                    <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
                    <h4 className="font-medium">Product {i}</h4>
                    <p className="text-sm text-gray-600">$99.99</p>
                  </div>
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Article List</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages} - 50 articles per page
                </p>
              </div>
              <div className="space-y-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded border">
                    <h4 className="font-medium">Article Title {i}</h4>
                    <p className="text-sm text-gray-600">
                      This is a brief description of the article content...
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Published on Jan {i}, 2024
                    </p>
                  </div>
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                  {pageNumbers.map((page, index) => (
                    <PaginationItem key={index}>
                      {page === 'ellipsis' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page as number);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Best Practices</h3>
            <div className="space-y-2 text-sm">
              <p>• Use pagination when you have more than 10-20 items to display</p>
              <p>• Show current page number and total pages when possible</p>
              <p>• Include Previous/Next buttons for better navigation</p>
              <p>• Use ellipsis (...) when there are many pages</p>
              <p>• Consider showing items per page selector for large datasets</p>
              <p>• Ensure pagination is accessible with proper ARIA labels</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 