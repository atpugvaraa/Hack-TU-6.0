const testimonials = [
  {
    quote: "blah blah blah",
    author: "Keith Finley",
    image: "/Mog.jpg",
  },
  {
    quote: "blah blah blah",
    author: "Monet Goode",
    image: "/Mog.jpg",
  },
  {
    quote: "blah blah blah",
    author: "Channing Lee",
    image: "/Mog.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.author} className="testimonial-image" />
            <blockquote>{testimonial.quote}</blockquote>
            <p className="author">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

