import { subtitle, title } from "@/components/primitives";
import { Socials } from "@/components/socials";
import clsx from "clsx";
//https://cal.com/andrew-carlisle-wsvppu
export default function Home() {
  return (
    <div className="flex h-screen flex-row">
      <section className="flex h-full max-h-screen w-1/3 grow  flex-col  overflow-y-auto py-28">
        <div className="h-3/6 items-center justify-center bg-purple-700 text-center">
          <span className={title()}>Andrew Carlisle&nbsp;</span>
          <span className={subtitle()}>Software Engineer</span>
        </div>
        <div className="h-2/6 px-10">
          <p>
            <ul className="list-inside list-disc">
              <li className={clsx("list-item", subtitle())}>Work Experience</li>
              <li className={clsx("list-item", subtitle())}>About</li>
              <li className={clsx("list-item", subtitle())}>Projects</li>
              <li className={clsx("list-item", subtitle())}>Contact</li>
            </ul>
          </p>
        </div>
        <div className="flex h-1/6 items-center justify-center bg-red-700">
          <Socials />
        </div>
        <div />
      </section>

      <section className="flex max-h-screen w-2/3 flex-col items-start justify-start gap-4 overflow-y-auto py-8 md:py-10">
        <div className="inline-block max-w-xl justify-center text-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>
      </section>
    </div>
  );
}
