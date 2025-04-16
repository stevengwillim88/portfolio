import { motion } from "framer-motion";

export default function Stack() {
  return (
    <motion.div
      className="flex  flex-col mb-5 "
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
      <h2 className="text-2xl md:text-3xl text-center font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
        Language & Framework
      </h2>
      <div className="text-gray-500 tracking-widest ">
        <div> 
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Languages</h4>
          <p className="pl-4 text-black font-medium">
            HTML | CSS | JavaScript | PHP | Python | Java | C#
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Frontend Development</h4>
          <p className="pl-4 text-black font-medium">
            React | NextJS | Vue | NuxtJS | Angular | Svelte | Material UI |
            ShadCN | Radix | Tailwind CSS | Bootstrap
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Backend Development</h4>
          <p className="pl-4 text-black font-medium">
            Typescript | NodeJS | NestJS | ExpressJS | Django | Laravel |
            SpringBoot | ASP.NET | .NET Core | Supabase | Firebase
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Mobile Development</h4>
          <p className="pl-4 text-black font-medium">
            React Native | Flutter | Ionic | Capacitor | Cordova | Expo
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">API & Auth</h4>
          <p className="pl-4 text-black font-medium">
            REST API | GraphQL | gRPC | tRPC | WebSocket | JWT | OAuth2 | Auth0
            | Passport.js | SSL/TLS | RBAC
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">AI & ML</h4>
          <p className="pl-4 text-black font-medium">
            OpenAI API | Vercel AI | AWS Bedrocks | Azure OpenAI | LangChain |
            NLP | LLM | RAG | GPT (3, 3.5, 4) | Hugging Face | Transformers
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Database</h4>
          <p className="pl-4 text-black font-medium">
            Redis | MySQL | PostgreSQL | DynamoDB | MongoDB
          </p>
        </div>
      </div>
    </motion.div>
  );
}
