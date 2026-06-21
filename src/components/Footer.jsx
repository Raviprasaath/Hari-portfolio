

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
