const Footer:React.FC = () => {
    return(
        <footer className="bg-primary-gray text-white py-8 px-10">
  <div className="container mx-auto flex flex-wrap items-center justify-between">
  <div className="mt-4 md:mt-0">
      <p className="text-sm text-gray-400">&copy; 2023 Aiken Construction Inc. All rights reserved.</p>
    </div>
    <div className="flex mt-4 md:mt-0">
      <a href="#" className="mx-2 hover:text-primary-red font-thin">Terms &amp; Conditions</a>
      <a href="#" className="mx-2 hover:text-primary-red font-thin">Privacy Policy</a>
    </div>

  </div>
</footer>

    );
}

export default Footer;