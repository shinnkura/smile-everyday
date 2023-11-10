"use client";

import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between px-6 py-3 ">
      <Link href="/" className="flex items-center gap-4">
        {/* TODO ロゴ画像をSVGに直す */}
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          SimpleBooking
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
