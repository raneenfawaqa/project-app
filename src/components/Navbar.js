import React from 'react';
import './Navbar.css';
import './root.css';
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo">عيادة الدكتور فارس الفقيه</div>
        <ul>
          <li>الرئيسية</li>
          <li>من نحن</li>
          <li>الخدمات</li>
          <li>الفريق الطبي</li>
          <li>حجز موعد</li>
          <li>المدونة</li>
        </ul>
        <div className="content">
          <a href="https://www.facebook.com/Dr.Faris.Faqeeh" className="content1" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/dr.f.faqeeh" className="content2" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/595550544" className="content3" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
