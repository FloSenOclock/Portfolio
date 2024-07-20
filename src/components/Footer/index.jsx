const Footer = ({ french }) => {
  return (
    <footer className="mt-auto  text-sm text-center footer-center bg-light-bgsecondary dark:bg-dark-bgsecondary text-light-txtsecondary dark:text-dark-txtsecondary py-2 ">
      <div>
        {french ? (
          <p>Copyright © 2024 - Tous droits réservés par Senor Florian</p>
        ) : (
          <p>Copyright © 2024 - All right reserved by Senor Florian</p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
