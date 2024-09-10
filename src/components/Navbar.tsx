import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex mx-10 items-center justify-between">
        <div>
          <span>devDaman</span>
        </div>
        <nav className="">
          <ul className="flex items-center justify-between gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">blog page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
