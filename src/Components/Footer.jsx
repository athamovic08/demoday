import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ubuy-footer">
      <div className="footer-top">
        <div className="footer-col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <a href="#">Payment</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-col">
          <h4>Policy</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refund Policy</a>
        </div>

        <div className="footer-col">
          <h4>Country & Language</h4>
          <div className="footer-selects">
            <select>
              <option>United States</option>
              <option>Uzbekistan</option>
            </select>

            <select>
              <option>English</option>
              <option>Uzbek</option>
            </select>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;