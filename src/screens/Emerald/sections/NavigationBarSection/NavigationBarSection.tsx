import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "Getting started", hasDropdown: true },
  { label: "Components", hasDropdown: true },
  { label: "Documentation", hasDropdown: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex max-w-[1312px] items-center justify-between px-8 py-4 w-full bg-zinc-950">
      <div className="inline-flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6 rounded">
            <img
              className="absolute top-[-16.67%] left-[-16.67%] w-[133.33%] h-[133.33%]"
              alt="Favicon"
              src="/favicon.svg"
            />
          </div>
          <span className="font-text-lg-font-bold font-[number:var(--text-lg-font-bold-font-weight)] text-neutral-50 text-[length:var(--text-lg-font-bold-font-size)] tracking-[var(--text-lg-font-bold-letter-spacing)] leading-[var(--text-lg-font-bold-line-height)] [font-style:var(--text-lg-font-bold-font-style)]">
            Launch UI
          </span>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="gap-0">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.hasDropdown ? (
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent px-4 py-2 font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
                    {item.label}
                  </NavigationMenuTrigger>
                ) : (
                  <NavigationMenuLink className="inline-flex items-center justify-center px-4 py-2 rounded-md font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)] hover:bg-zinc-800 transition-colors">
                    {item.label}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="inline-flex items-center gap-4">
        <Button
          variant="ghost"
          className="px-4 py-2 font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-neutral-50 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)] hover:bg-zinc-800"
        >
          Sign in
        </Button>

        <Button
          asChild
          className="px-4 py-2 rounded-md shadow-box-shadow-shadow bg-[linear-gradient(180deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.8)_100%)] font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-zinc-900 text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)] hover:bg-[linear-gradient(180deg,rgba(250,250,250,0.95)_0%,rgba(250,250,250,0.75)_100%)]"
        >
          <a
            href="https://www.launchuicomponents.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get started
          </a>
        </Button>
      </div>
    </nav>
  );
};
