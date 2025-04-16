import { motion } from "framer-motion";

export default function Tools() {
  return (
    <motion.div
      className="flex justify-start items-center flex-col mb-5 "
      initial={{
        opacity: 0,
        x: 200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.6,

        type: "spring",
      }}
    >
      <h2 className="text-2xl md:text-3xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
        Tools
      </h2>
      <div className="text-gray-500">
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Code Editor</h4>
          <p className="pl-4 text-black font-medium">
            VS Code | Cursor | Jet Brains
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Version Control</h4>
          <p className="pl-4 text-black font-medium">
            Git | GitHub | GitLab | BitBucket
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">DevOp & Cloud</h4>
          <p className="pl-4 text-black font-medium">
            CI/CD | Terraform | Jenkins | Docker | K8S | Kelm | SSL/TLS |
            Selenium | Jest | AWS | S3 | GCP
          </p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl leading-[40px] md:leading-[60px]">Testing</h4>
          <p className="pl-4 text-black font-medium">
            Unit Testing | Integration Testing | Load Testing | Debugging Tools
            | Postman | JUnit | PyTest
          </p>
        </div>
      </div>
    </motion.div>
  );
}
