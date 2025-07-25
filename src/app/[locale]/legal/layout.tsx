import TopBar from "@/components/layout/header/top-bar/TopBar";
import Header from "@/components/layout/header/Header";
import Navigation from "@/components/layout/header/nav-bar/Nav";
import Footer from "@/components/layout/footer/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="page">
      <a className="skip-link screen-reader-text" href="#content">
        Aller au contenu
      </a>
      
      {/* Full S2PI Header */}
      <div className="masthead classic-header center content-width-line widgets full-height dividers shadow-decoration shadow-mobile-header-decoration small-mobile-menu-icon dt-parent-menu-clickable show-sub-menu-on-hover show-device-logo" role="banner">
        <TopBar />
        <Header />
        <Navigation />
      </div>

      {/* Main Content */}
      <main id="main" className="sidebar-none sidebar-divider-vertical">
        <div className="main-gradient">
          <div className="wf-wrap">
            <div className="wf-container-main">
              <div id="content" className="content" role="main">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}