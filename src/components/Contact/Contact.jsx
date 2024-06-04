export const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[rgba(12,12,12,0.31)] rounded-lg mt-32 z-10 mx-5 mb-5 text-[--color-text] flex justify-between"
    >
      <div className="text-xl font-bold tracking-wider ">
        {/* <h2 className="text-white">Contact Me </h2> */}
        <h4 className="text-white mb-2">I'm Just One Click Away</h4>
        <a className=" text-white" href="mailto:ayushjrathod7@gmail.com">
          ayushjrathod7@gmail.com
        </a>
      </div>
      <div className=" w-64  inline-flex gap-10 text-5xl no-underline items-center justify-center ml-4 mt-4 mr-5">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ayushjrathod"
          className="text-[#0fd8f3]"
        >
          <img src="assets/contact/linkedin.png" />
        </a>
        <a
          target="_blank"
          href="https://github.com/ayushjrathod"
          className="text-[#0fd8f3]"
        ><img src="assets/contact/github.png" /></a>
        <a
          target="_blank"
          href="https://twitter.com/ayushjrathod"
          className="text-[#0fd8f3]"
        ><img src="assets/contact/twitter.png" /></a>
        <a
          target="_blank"
          href="https://www.instagram.com/ayushjrathod"
          className="text-[#0fd8f3]"
        ><img src="assets/contact/instagram.png" /></a>
      </div>
    </footer>
  );
};
