"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SidebarNav = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(
    null
  );

  const handleSubmenuToggle = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
    setOpenNestedSubmenu(null); // Close nested menus when changing main submenu
  };

  const handleNestedSubmenuToggle = (nestedSubmenu: string) => {
    setOpenNestedSubmenu(
      openNestedSubmenu === nestedSubmenu ? null : nestedSubmenu
    );
  };

  return (
    <>
      <nav className="sidebar-nav">
        <div className="nav-brand">
          <Image
            src="/images/logo/logo_01_trans.png"
            alt="Avadh Group Logo - Golden Emblem"
            width={80}
            height={80}
            className="nav-logo"
          />
        </div>

        <ul className="chapter-nav">
          <li className="nav-item active" data-chapter="1">
            Home
          </li>
          <li className="nav-item" data-chapter="2">
            About Us
          </li>

          {/* Residential */}
          <li className="nav-item has-submenu">
            Residential
            <i className="fas fa-chevron-down dropdown-icon"></i>
            <ul className="submenu">
              <li className="has-nested-submenu">
                <div className="submenu-title">
                  On Going <br />
                  Projects <i className="fas fa-chevron-right"></i>
                </div>
                <ul className="nested-submenu">
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/residential-ongoing/01-avadh-riverside.webp"
                        alt="Avadh Riverside"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Riverside</span>
                        <span className="loc">Tukwada, Vapi</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/residential-ongoing/02-avadh-bertina.webp"
                        alt="Avadh Bertina"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Bertina</span>
                        <span className="loc">Vesu, surat</span>
                      </div>
                    </Link>
                  </li>
                  <li className="view-all-link">
                    <Link href="/portfolio">
                      View All Residential
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-nested-submenu">
                <div className="submenu-title">
                  Completed <br />
                  Projects <i className="fas fa-chevron-right"></i>
                </div>
                <ul className="nested-submenu">
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/residential-complete/01-avadh-carolina.webp"
                        alt="Avadh Carolina"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Carolina</span>
                        <span className="loc">Dumas, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/residential-complete/02-avadh-regalia.webp"
                        alt="Avadh Regalia"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Regalia</span>
                        <span className="loc">Navsari, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/residential-complete/03-avadh-copper-stone.webp"
                        alt="Avadh Copper Stone"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Copper Stone</span>
                        <span className="loc">Dumas, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li className="view-all-link">
                    <Link href="/portfolio">
                      View All Completed
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Commercial */}
          <li className="nav-item has-submenu" data-chapter="4">
            Commercial
            <i className="fas fa-chevron-down dropdown-icon"></i>
            <ul className="submenu">
              <li className="has-nested-submenu">
                <div className="submenu-title">
                  On Going <br />
                  Projects <i className="fas fa-chevron-right"></i>
                </div>
                <ul className="nested-submenu">
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/commerc-ongoing/01-avadh-arkelia.webp"
                        alt="Avadh Arkelia"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Arkelia</span>
                        <span className="loc">Rundh, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/commerc-ongoing/02-avadh-kontina.webp"
                        alt="Avadh Kontina"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Kontina</span>
                        <span className="loc">Vesu, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li className="view-all-link">
                    <Link href="/portfolio">
                      View All Commercial
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-nested-submenu">
                <div className="submenu-title">
                  Completed <br />
                  Projects <i className="fas fa-chevron-right"></i>
                </div>
                <ul className="nested-submenu">
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/commerc-complete/01-avadh-texttile-market.webp"
                        alt="Avadh Textile Market"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Textile Market</span>
                        <span className="loc">Sahara Darwaja, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/commerc-complete/02-avadh-viceroy.webp"
                        alt="Avadh Viceroy"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Viceroy</span>
                        <span className="loc">Nana Varachha, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="project-card-mini">
                      <Image
                        src="/images/navbar/commerc-complete/03-avadh-arena.webp"
                        alt="Avadh Arena"
                        width={100}
                        height={60}
                        loading="lazy"
                      />
                      <div className="info">
                        <span className="name">Avadh Arena</span>
                        <span className="loc">Vesu, Surat</span>
                      </div>
                    </Link>
                  </li>
                  <li className="view-all-link">
                    <Link href="/portfolio">
                      View All Completed
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Lifestyle Club */}
          <li className="nav-item has-submenu" data-chapter="5">
            Lifestyle Club
            <i className="fas fa-chevron-down dropdown-icon"></i>
            <ul className="submenu">
              <li>
                <Link href="#">Club Utopia</Link>
              </li>
              <li>
                <Link href="#">Events & Banquets</Link>
              </li>
              <li>
                <Link href="#">Membership</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item" data-chapter="6">
            About Us
          </li>
          <li className="nav-item">
            <Link href="/enquiry">Contact</Link>
          </li>
        </ul>

        <div className="nav-footer">
          <button
            className="nav-search-trigger"
            id="navSearchTrigger"
            aria-label="Open Search"
          >
            <i className="fas fa-search"></i>
          </button>
          <button className="cta-button" id="openModalBtn">
            <span>Enquire</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          <div className="social-links">
            <Link href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div className="search-overlay" id="searchOverlay">
        <input
          type="text"
          className="search-overlay-input"
          placeholder="Search projects, locations..."
          id="navSearchInput"
        />
        <button className="search-close" id="searchCloseBtn">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </>
  );
};

export default SidebarNav;
