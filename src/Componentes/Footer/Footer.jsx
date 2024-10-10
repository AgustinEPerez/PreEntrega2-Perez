import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h4>Sobre nosotros</h4>
          <p>Somos una tienda online dedicada a ofrecer lo mejor en productos deportivos.</p>
        </div>
        <div className="footerSection">
          <h4>Contacto</h4>
          <p>Email: info@futbolshoponline.com</p>
          <p>Teléfono: +123 456 789</p>
        </div>
        <div className="footerSection">
          <h4>Síguenos</h4>
          <p>
            <a href="https://facebook.com">Facebook</a> | <a href="https://instagram.com">Instagram</a> | <a href="https://twitter.com">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2024 FutbolShopOnline. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
