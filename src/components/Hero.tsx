function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-yellow-400">Charles Gratela</span>
          </h1>
          <h2 className="text-2xl mb-6 text-blue-100">Full Stack Developer</h2>
          <p className="text-lg mb-8 text-blue-100 leading-relaxed">
          I’m Charles Gandeza Gratela, a fresh graduate specializing in back-end development with working knowledge of front-end technologies. I love building practical, efficient solutions and constantly learning to become a well-rounded full-stack developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm overflow-hidden">
            <img 
              src="/images/projects/image.jpg" 
              alt="Charles Gratela" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
