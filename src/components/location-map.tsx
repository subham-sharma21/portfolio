'use client'

export function LocationMap() {
  return (
    <div className="w-full h-64 bg-zinc-900 rounded-xl border border-zinc-700 overflow-hidden relative group">
      <div className="w-full h-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452148437!3d12.953945614117967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bangalore Location Map"
          allowFullScreen
        />
        {/* Light purple overlay */}
        <div className="absolute inset-0 bg-purple-400/15 pointer-events-none"></div>
      </div>
    </div>
  )
}