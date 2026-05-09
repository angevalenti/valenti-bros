import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PROJECT_TYPES = ['Custom Home', 'Renovation', 'Addition', 'Outdoor', 'Millwork', 'Not Sure Yet']
const TIMELINES = ['ASAP', '3–6 mo', '6–12 mo', 'Just exploring']
const BUDGETS = ['Under $50k', '$50–150k', '$150–500k', '$500k+', 'Not sure yet']

function RadioPills({ options, selected, onChange, name }) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
      {options.map((opt) => (
        <label
          key={opt}
          className={`flex items-center gap-2 px-2.5 py-2 text-[12px] cursor-pointer transition-all duration-100 ${
            selected === opt
              ? 'bg-mario-gold shadow-block-sm'
              : 'bg-white hover:bg-[#F4E9D0]'
          }`}
          style={{ border: '2px solid #2A2218' }}
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
            style={{
              border: '1.5px solid #2A2218',
              background: selected === opt ? '#2A2218' : 'white',
            }}
          />
          <input
            type="radio"
            name={name}
            value={opt}
            checked={selected === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt}
        </label>
      ))}
    </div>
  )
}

const inputClass = 'w-full bg-white py-2.5 px-3 font-body text-[13px] outline-none transition-shadow duration-100 focus:shadow-[3px_3px_0_0_#2A2218]'
const inputStyle = { border: '2.5px solid #2A2218', borderRadius: 0 }

export default function BuildPage() {
  const { pathname } = useLocation()
  const [submitted, setSubmitted] = useState(false)
  const [projectType, setProjectType] = useState('')
  const [timeline, setTimeline] = useState('')
  const [budget, setBudget] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire up form destination (Formspree, email, etc.)
    setSubmitted(true)
  }

  return (
    <section className="bg-mario-gray py-12 px-6">
      <div className="max-w-[580px] mx-auto">
        {/* Page header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-mario-gold text-mario-black px-3 py-2 border-3 border-mario-black shadow-block-sm mb-4">
            <span
              aria-hidden
              className="inline-block w-[14px] h-[14px] bg-mario-gold border-2 border-mario-black"
            />
            <span className="font-pixel text-[9px]">NEW PROJECT</span>
          </div>
          <h1 className="font-display text-[32px] leading-[0.95] m-0 mb-2 text-mario-black">
            Tell us about your build.
          </h1>
          <p className="text-[13px] leading-[1.55] m-0 mx-auto max-w-[460px]" style={{ color: '#555' }}>
            A few quick questions so we can give you a real, thoughtful response — not a copy-paste
            reply. We'll be back in touch within two business days.
          </p>
        </div>

        {submitted ? (
          /* ── Success state ── */
          <div className="bg-white border-3 border-mario-black shadow-block p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-mario-gold text-mario-black px-3 py-2 border-3 border-mario-black shadow-block-sm mb-5">
              <span
                aria-hidden
                className="inline-block w-[14px] h-[14px] bg-mario-gold border-2 border-mario-black animate-coin-spin"
              />
              <span className="font-pixel text-[9px]">▶ THANKS — WE'LL BE IN TOUCH</span>
            </div>
            <p className="text-[14px] leading-relaxed m-0" style={{ color: '#555' }}>
              Your message is in another castle, but we'll be reading it shortly.
            </p>
          </div>
        ) : (
          /* ── Form ── */
          <form onSubmit={handleSubmit} className="bg-white border-3 border-mario-black shadow-block p-6 md:p-7">
            {/* Name */}
            <div className="mb-4">
              <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                ▶ YOUR NAME
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Jane Builder"
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
              <div>
                <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                  ▶ EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                  ▶ PHONE <span className="text-[7px] opacity-50 ml-1">(OPTIONAL)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(717) 555-0100"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="mb-4">
              <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                ▶ PROJECT TYPE
              </label>
              <RadioPills
                options={PROJECT_TYPES}
                selected={projectType}
                onChange={setProjectType}
                name="projectType"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                ▶ TELL US ABOUT YOUR PROJECT
              </label>
              <textarea
                name="description"
                required
                placeholder="The basics — what you're imagining, where it is, anything else helpful for us to know."
                className={inputClass}
                style={{ ...inputStyle, minHeight: '90px', resize: 'vertical' }}
              />
            </div>

            {/* Timeline */}
            <div className="mb-4">
              <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                ▶ TIMELINE <span className="text-[7px] opacity-50 ml-1">(OPTIONAL)</span>
              </label>
              <RadioPills
                options={TIMELINES}
                selected={timeline}
                onChange={setTimeline}
                name="timeline"
              />
            </div>

            {/* Budget */}
            <div className="mb-4">
              <label className="font-pixel text-[8px] tracking-widest text-mario-black block mb-1.5">
                ▶ BUDGET RANGE <span className="text-[7px] opacity-50 ml-1">(OPTIONAL)</span>
              </label>
              <RadioPills
                options={BUDGETS}
                selected={budget}
                onChange={setBudget}
                name="budget"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 bg-mario-red border-3 border-mario-black shadow-block px-6 py-4 font-pixel text-[11px] tracking-wider cursor-pointer inline-flex items-center justify-center gap-3 transition-all duration-100 ease-out hover:animate-pulse-glow active:translate-x-1 active:translate-y-1 active:shadow-block-xs"
              style={{ color: '#F5E6C8' }}
            >
              <span aria-hidden>▶</span>
              <span>SEND IT</span>
            </button>

            <p className="text-[11px] text-center mt-3 m-0" style={{ color: '#888' }}>
              We'll never share your info. Promise.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
