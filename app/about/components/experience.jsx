import Hr from "@/components/Hr";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start">
        <Hr variant="long"></Hr>
        <motion.h1
          className="text-3xl font-bold mt-3"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.7,

            type: "spring",
          }}
        >
          Profesional Experience
        </motion.h1>
      </div>
    </div>
  );
}

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
      <motion.div
        className="flex justify-center items-start flex-col mb-5 "
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,

          type: "spring",
        }}
      >
        <section className="grid gap-8 md:gap-12">
          <div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
            {children}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Title />
      <Wrapper>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2022 - 2025</div>
          <div>
            <h3 className="font-semibold text-xl text-black">
              WellDev - TELUS Health
            </h3>
            <h4 className=" font-light text-md mb-4">
              Senior Software Engineer
            </h4>
            <h5 className="text-justify font-bold italic">
              Built a modular, micro-frontend dashboard for healthcare providers
              with multi-tenant support, SSO, and real-time data features.
            </h5>
            <p>
              • Led the migration to Micro-Frontend Architecture using Webpack
              Module Federation and Nx monorepo<br></br> • Built core UI
              components using React 18, TypeScript, and Tailwind CSS following
              atomic design principles<br></br> • Created SSR-enabled modules
              with Next.js 13 for dynamic route handling and SEO optimization
              <br></br> • Integrated OAuth2 SSO and access control with React
              Router and context-based auth layers<br></br> Collaborated with
              backend teams consuming REST and GraphQL APIs<br></br>• Achieved
              Lighthouse scores of 95+ through lazy loading, image optimization,
              and code splitting <br></br>• Used Cypress, Jest, and Storybook
              for E2E, unit, and visual testing <br></br>• Deployed to Azure
              using GitHub Actions and Terraform; monitored frontend KPIs via
              Sentry and Datadog
              <br></br>• Mentored 5+ frontend engineers and standardized the
              frontend build pipeline
            </p>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2018 - 2021</div>
          <div>
            <h3 className="font-semibold text-xl text-black">Amazon</h3>
            <h4 className=" font-light text-md mb-4">
              Senior Fullstack Developer
            </h4>
            <h5 className="text-justify font-bold italic">
              Rebuilt customer order and delivery portals using React and
              introduced Next.js for server-side rendering and
              internationalization.
            </h5>
            <p>
              • Developed React-based dashboards with Redux Toolkit and custom
              hooks<br></br>• Built SSR components using Next.js 10–12 with
              dynamic imports and fallback strategies<br></br>• Integrated
              real-time order tracking using WebSockets and React Query<br></br>
              • Used Angular 10+ to maintain legacy modules during React
              migration<br></br>• Contributed to internal component library with
              accessibility and theming support (ARIA, dark mode)<br></br>•
              Reduced initial load time by 45% with route-based code splitting
              and image optimization<br></br>• Automated deployments with
              Jenkins and managed frontend containers on AWS ECS<br></br>•
              Participated in A/B testing with Optimizely and Google Optimize to
              drive UI decisions
            </p>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2017 - 2018</div>
          <div>
            <h3 className="font-semibold text-xl text-black">eBSEG</h3>
            <h4 className=" font-light text-md mb-4">FullStack Develoepr</h4>
            <h5 className="text-justify font-bold italic">
              Delivered CMS-integrated and real-time financial dashboards using
              Angular and early React SPAs.
            </h5>
            <p>
              • Developed AngularJS to Angular 6+ enterprise applications with
              RxJS and NgRx
              <br></br>• Migrated key modules from jQuery to React 16, improving
              maintainability and performance
              <br></br>• Built responsive layouts using Bootstrap 4, Flexbox,
              and Sass
              <br></br>• Implemented data-driven charts with D3.js and Chart.js
              <br></br>• Integrated REST APIs and used Axios, GraphQL clients
              for data layers
              <br></br>• Created custom CI/CD scripts for versioned builds and
              CDN deployments
              <br></br>• Led internal workshops on moving from monoliths to SPAs
              and PWA patterns
            </p>
          </div>
        </div>
        <div className="grid gap-4 relative">
          <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
          <div className="font-medium text-lg">2012 - 2014</div>
          <div>
            <h3 className="font-semibold text-xl text-black">iQmetrix</h3>
            <h4 className=" font-light text-md mb-4">Junior Software Develoepr</h4>
            <h5 className="text-justify font-bold italic">
              Maintained retail-facing admin panels and reporting UIs using
              HTML5, CSS3, and jQuery in an ASP.NET-based ecosystem.
            </h5>
            <p>
              • Built interactive forms and reports with jQuery and vanilla
              JavaScript
              <br></br>• Migrated static pages to responsive templates using
              Bootstrap 3<br></br>• Supported early experiments with Knockout.js
              and client-side routing
              <br></br>• Assisted QA and UX teams with user testing, UI fixes,
              and browser compatibility
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
