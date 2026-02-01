import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              {language === 'en' ? 'Get in Touch' : 'Свържете се с нас'}
            </h3>
            <p className="text-base text-slate-300 mb-8 leading-relaxed">
              {language === 'en'
                ? "Have a project in mind? We'd love to hear about it. Send us a message and we'll respond as soon as possible."
                : 'Имате проект? Бихме искали да научим повече. Изпратете ни съобщение и ще отговорим възможно най-скоро.'}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Email</div>
                  <a
                    href="mailto:info@web-bg.tech"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    info@webltd.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    {language === 'en' ? 'Phone' : 'Телефон'}
                  </div>
                  <a
                    href="tel:+359895115229"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    +359 895 115 229
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">
                    {language === 'en' ? 'Location' : 'Локация'}
                  </div>
                  <div className="text-slate-300">
                    {language === 'en' ? 'Sofia, Bulgaria' : 'София, България'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={language === 'en' ? 'John Doe' : 'Иван Иванов'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder={language === 'en' ? 'john@example.com' : 'ivan@example.com'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder={language === 'en' ? 'Tell us about your project...' : 'Разкажете ни за вашия проект...'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg font-semibold transition-all ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isSubmitted ? (
                  <span>{language === 'en' ? 'Message Sent!' : 'Съобщението е изпратено!'}</span>
                ) : (
                  <>
                    <span>{t.contact.send}</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
