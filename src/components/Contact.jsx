import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { inViewHandler } from "../animationHandler";
import { useState } from "react";

const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return (
    <InView
      onChange={(inView) => inViewHandler(inView, animation)}
    >
      <section id="contact" className="section bg-primary">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={animation}
        >
          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            <form
              className="space-y-8 w-full max-w-[780px]"
            >
              <div className="flex gap-8">
                <input
                  className="input"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                className="input"
                type="text"
                placeholder="Your Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="textarea"
                type="text"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* Did not implement the working */}
              <button className="btn btn-lg bg-blue-700 hover:bg-blue-900">
                Send Message
              </button>
            </form>
            <div className="flex flex-col">
              <h1 className="section-title text-5xl">Contact Me</h1>
              <p className="text-lg text-gray-200 mt-4 max-w-md">
                I am always excited to hear about new projects. Feel free to send me a message, and I'll be ready to cooperate
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </InView>
  )
}

export default Contact