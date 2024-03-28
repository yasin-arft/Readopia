import NavListItems from "../NavListItem/NavListItem";

const Header = () => {
  const navItems = [
    { text: 'Home', route: '/' },
    { text: 'Listed Books', route: '/listed_books' },
    { text: 'Pages to Read', route: '/pages_to_read' },
    { text: 'About', route: '/about' },
  ];

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {
                  navItems.map((item, idx) => <NavListItems key={idx} item={item} />)
                }
              </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-2xl font-bold">Readopia</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="nav-list menu menu-horizontal px-1 gap-4 text-lg text-dark-800">
              {
                navItems.map((item, idx) => <NavListItems key={idx} item={item} />)
              }
            </ul>
          </div>
          <div className="navbar-end gap-2 sm:gap-4">
            <a className="btn bg-green text-white sm:text-lg px-3 sm:px-5 h-auto min-h-10 sm:min-h-12">Sign In</a>
            <a className="btn bg-sky text-white sm:text-lg px-3 sm:px-5 h-auto min-h-10 sm:min-h-12">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;