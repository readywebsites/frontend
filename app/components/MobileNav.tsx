"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <button className="mobile-menu-trigger" id="mobileMenuTrigger">
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </button>
      <div className="mobile-menu-overlay" id="mobileMenuOverlay"></div>
      <nav className="mobile-nav" id="mobileNav">
        <div className="mobile-nav-header">
          <Image
            src="/images/logo/logo_01_trans.png"
            alt="Avadh Mobile Logo"
            width={60}
            height={60}
            className="mobile-logo"
            loading="lazy"
          />
          <button className="close-menu" id="closeMenuBtn">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="mobile-chapter-nav">
          <li className="mobile-nav-item active" data-chapter="1">
            HOME
          </li>
          <li className="mobile-nav-item has-mobile-submenu">
            <div className="mobile-nav-header-row">
              <span data-chapter="2">RESIDENTIAL</span>
              <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
            </div>
            <ul className="mobile-submenu">
              <li className="mobile-nested-item">
                <div className="mobile-nav-header-row nested-header">
                  <span>On Going Projects</span>
                  <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
                </div>
                <ul className="mobile-submenu nested">
                  <li>
                    <Link href="#">Avadh Antilia</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Carolina</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Utopia</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Symphony</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Arena</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="view-all-mobile-link">
                      View All 50+ Projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mobile-nested-item">
                <div className="mobile-nav-header-row nested-header">
                  <span>Completed Projects</span>
                  <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
                </div>
                <ul className="mobile-submenu nested">
                  <li>
                    <Link href="#">Avadh Symphony</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Utopia</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Textile Hub</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Business Park</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="view-all-mobile-link">
                      View All Completed
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mobile-nav-item has-mobile-submenu" data-chapter="4">
            <div className="mobile-nav-header-row">
              <span>COMMERCIAL</span>
              <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
            </div>
            <ul className="mobile-submenu">
              <li className="mobile-nested-item">
                <div className="mobile-nav-header-row nested-header">
                  <span>On Going Projects</span>
                  <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
                </div>
                <ul className="mobile-submenu nested">
                  <li>
                    <Link href="#">Avadh Arena</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Business Park</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="view-all-mobile-link">
                      View All Commercial
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mobile-nested-item">
                <div className="mobile-nav-header-row nested-header">
                  <span>Completed Projects</span>
                  <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
                </div>
                <ul className="mobile-submenu nested">
                  <li>
                    <Link href="#">Avadh Textile Hub</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Business Park</Link>
                  </li>
                  <li>
                    <Link href="#">Avadh Arena</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="view-all-mobile-link">
                      View All Completed
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mobile-nav-item has-mobile-submenu" data-chapter="5">
            <div className="mobile-nav-header-row">
              <span>LIFESTYLE CLUB</span>
              <i className="fas fa-chevron-down mobile-dropdown-toggle"></i>
            </div>
            <ul className="mobile-submenu">
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
          <li className="mobile-nav-item">
            <Link href="#">BLOG</Link>
          </li>
          <li className="mobile-nav-item" data-chapter="6">
            ABOUT US
          </li>
          <li className="mobile-nav-item contact-trigger">CONTACT</li>
        </ul>
        <div className="mobile-nav-footer">
          <button className="mobile-search-btn" id="mobileSearchBtn">
            <i className="fas fa-search"></i> Search
          </button>
          <button className="mobile-cta" id="mobileCtaBtn">
            Enquire Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
