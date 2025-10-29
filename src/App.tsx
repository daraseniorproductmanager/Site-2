import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Rocket, 
  Shield, 
  TrendingUp, 
  Zap, 
  Users, 
  DollarSign,
  BarChart3,
  Lock,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  Send
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ✅ testimonials به‌روزرسانی‌شده — 6 مورد
  const testimonials = [
    {
      income: '300,000$',
      text: 'فقط با فعالیت در شبکه های اجتماعی و دعوت به ثبت نام فالورها در سایت شرطبندی اختصاصی خودم انجان شد. هیچ زحتی نداشت همونقدر که تیم بت پنل می گفت آسون بود.',
      name: 'نیلی افشار',
      brand: 'shir bet'
    },
    {
      income: '400,000$',
      text: 'الان نزدیکه دو سال که من با تیم بت پنل کار می کنم، هیچوقت فکر نمی کردم به این درآمد برسم. تمام کارها از طریق خود تیم بت پنل انجام شد و من فقط فالوورهامو به ثبت نام دعوت کردم',
      name: 'دنیا جهان بخت',
      brand: 'Shah bet'
    },
    {
      income: '100,000$',
      text: 'برای اولین بار بود که تجربه حرفه ای داشتم. پرداخت به موقع داشتن و تمام کاربرها کش اوت به موقع گرفتن. تیم بت پنل واقعا حرفه ای بود',
      name: 'پوبون',
      brand: 'hot bet'
    },
    // ✅ موارد جدید
    {
      income: '300,000$',
      text: 'خیلی فن اینکار نبودم ولی بعد از همکاری با بت پنل نظرم عوض شد. هم از لحاظ مالی و هم از لحاظ مدیریتی بسیار حرفه ای بود. بنظرم اگر قصد دارید سایت شرطبندی داشته باشین حتما با بت پنل اینکارو بکنید.',
      name: 'بهزاد لیتو',
      brand: 'Betroyal'
    },
    {
      income: '100,000$',
      text: 'امن و راحت. فقط کارهای تبلیغات با من بود و بقیه موارد توسط خود بت پنل انجام شد. پرداختی ها به موقع بود و از سمت کاربرها هم اعتراضی نداشتیم.',
      name: 'وانتوز',
      brand: 'shir bet'
    },
    {
      income: '200,000$',
      text: 'برای آدمی مثل من که وقت و حوصله راه اندازی رو نداشت بهترین راه بود، چون همه چی آماده بود و من فقط پنل درآمدی رو چک میکردم. کار با پنل آسون بود و تسویه حساب به موقع انجام می شد.',
      name: 'سیجل',
      brand: '' // بدون برند
    }
  ];

  const features = [
    { icon: BarChart3, title: 'انواع بازی‌های کازینویی محبوب', gradient: 'from-cyan-500 to-blue-500' },
    { icon: Zap, title: 'پیش‌بینی ورزشی با ضرایب به‌روز', gradient: 'from-blue-500 to-purple-500' },
    { icon: Lock, title: 'پرداخت آسان و سریع', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, title: 'بهترین روش‌های پرداخت رمز‌ارزی', gradient: 'from-pink-500 to-red-500' },
    { icon: Smartphone, title: 'ابزارهای مدیریتی قدرتمند و ساده', gradient: 'from-red-500 to-orange-500' },
    { icon: Shield, title: 'برندسازی شخصی و طراحی اختصاصی سایت شما', gradient: 'from-orange-500 to-yellow-500' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-right"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-16 h-16 text-cyan-400 mx-auto md:mx-0 md:mr-0" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-l from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                بت‌پنل
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10">
پلتفرمی مطمئن و اختصاصی برای ستاره‌ها که به دنبال درآمد دلاری پایدار با مخاطبان خود از دنیای بازی و سرگرمی هستند              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-10 py-6 rounded-full shadow-lg shadow-cyan-500/50"
                >
                  همین حالا شروع کنید
                  <Rocket className="mr-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-3xl"></div>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <ImageWithFallback
                  src="https://betpanel.io/wp-content/themes/bpanel/assets/images/betfeatures.webp?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNpbm8lMjBwb2tlciUyMGNoaXBzJTIwY2FyZHN8ZW58MXx8fHwxNzYxNDc1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Casino Poker Chips and Cards"
                  
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-purple-500/20 blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-cyan-500/30">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-4 rounded-xl border border-cyan-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="h-20 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg mb-2"></div>
                        <div className="h-2 bg-cyan-400/30 rounded w-3/4"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-right"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-l from-cyan-400 to-purple-400 bg-clip-text text-transparent text-right">
ساخت سایت اختصاصی و درآمد دلاری پایدار              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-right">
                بت‌پنل پلتفرمی مطمئن و پیشرفته برای راه‌اندازی سایت اختصاصی در حوزه بازی و سرگرمی آنلاین است.

              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-right">
                بدون نیاز به دانش فنی یا تیم توسعه، در کوتاه‌ترین زمان می‌توانید سایت شخصی خود را فعال کنید و از مخاطبانتان درآمد دلاری واقعی به دست آورید.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 text-right">
                با زیرساخت قدرتمند، پشتیبانی تخصصی و پنل مدیریتی ساده، مسیر شما برای ورود به دنیای سودآور سرگرمی هموار شده است.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 text-right"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent text-right">
                درآمد دلاری با شبکه‌های اجتماعی، بدون نیاز به ساخت سایت
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-right">
              اگر در شبکه‌های اجتماعی فعال هستید، مخاطبان وفادار دارید یا در زمینه‌هایی مثل بلاگری، استریم یا تولید محتوای ورزشی فعالیت می‌کنید، بت‌پنل فرصتی ساده و سودآور برای شما دارد.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-right">
                تنها با ثبت‌نام در پنل همکاری، لینک دعوت اختصاصی خود را بسازید و آن را با دنبال‌کنندگان‌تان به اشتراک بگذارید.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-right">
               هر بار که فردی از طریق لینک شما وارد بازی شود و فعالیت کند، شما کمیسیون دلاری دریافت می‌کنید — بدون نیاز به راه‌اندازی سایت یا صرف هزینه اضافی.
              </p>
            
              <p className="text-gray-300 text-lg leading-relaxed text-right">
                مسیر شما به سمت درآمد دلاری از شبکه‌های اجتماعی، از همین‌جا شروع می‌شود.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
                <div className="relative grid grid-cols-3 gap-4">
                  {[Users, DollarSign, TrendingUp].map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-2xl border border-purple-500/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-12 h-12 text-purple-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-l from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ویژگی‌های بت‌پنل
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-8 hover:border-cyan-500/50 transition-all duration-300 group">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-4 text-white text-center">{feature.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent">
              امکانات پیشرفته
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8"> 
            {
              [
                {
                  title: 'داشبورد قدرتمند و مدیریت آسان',
                  description: 'با داشبورد حرفه‌ای و طراحی کاربرپسند بت‌پنل، همه چیز در کنترل شماست. بدون نیاز به دانش فنی، می‌توانید عملکرد کاربران، تراکنش‌ها و درآمدها را در لحظه ببینید و رشد کسب‌وکارتان را به‌صورت شفاف دنبال کنید.',
                  icon: BarChart3,
                  gradient: 'from-cyan-500 to-blue-500'
                },
                {
                  title: 'مجموعه‌ای کامل از بازی‌های کازینویی',
                  description: 'از بازی‌های کلاسیک گرفته تا جدیدترین عناوین روز دنیا — پلتفرم بت‌پنل همه را در اختیار شما قرار می‌دهد. تنوع بالا و تجربه روان باعث می‌شود کاربران شما بیشتر بمانند و سود شما بیشتر شود.',
                  icon: Sparkles,
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'تراکنش‌های سریع و امن با ارز دیجیتال',
                  description: 'با پشتیبانی از برترین رمزارزها، پرداخت‌ها و برداشت‌ها در بت‌پنل با سرعت، امنیت و شفافیت کامل انجام می‌شود. کاربران اعتماد می‌کنند، شما درآمد پایدار می‌گیرید.',
                  icon: Shield,
                  gradient: 'from-green-500 to-emerald-500'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-8 h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mt-1 text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </Card>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="relative z-10 text-center py-20 px-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Zap className="w-16 h-16 text-yellow-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
                همین امروز رشد دیجیتال خود را آغاز کنید!
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                فرم درخواست همکاری را پر کنید تا کارشناسان ما در کوتاه‌ترین زمان با شما تماس بگیرند و مسیر درآمدزایی آنلاین را آغاز کنید.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 rounded-full"
                >
                  درخواست پنل
                  <Rocket className="mr-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - ✅ به‌روزرسانی‌شده با 6 مورد و استایل جدید */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-gray-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-l from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              تجربه کاربران موفق
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30 p-10 text-center">
                  {/* درآمد با فونت بزرگ + عبارت کوچک‌تر */}
                  <div className="mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">
                      {testimonials[currentTestimonial].income}
                    </span>
                    <span className="text-base text-gray-400 mr-2">
                      میانگین درآمد ماهیانه
                    </span>
                  </div>
                  
                  <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                  
                  <p className="text-xl font-semibold text-white mb-2">
                    {testimonials[currentTestimonial].name}
                  </p>
                  
                  {testimonials[currentTestimonial].brand && (
                    <p className="text-cyan-400 font-medium">
                      {testimonials[currentTestimonial].brand}
                    </p>
                  )}
                </Card>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-cyan-400 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - ✅ به‌روزرسانی‌شده با سوالات و پاسخ‌های جدید */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent">
              سوالات متداول
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  برای راه‌اندازی یک سایت شرط‌بندی به چه چیزهایی نیاز دارم؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  برای شروع، به چند مؤلفه کلیدی نیاز دارید:
                  <br />• اسکریپت سایت شرط‌بندی: شامل بازی‌ها، مدیریت کاربران، تراکنش‌ها و امکانات اصلی.
                  <br />• پنل مدیریت: برای کنترل کامل سایت و نظارت بر عملکرد.
                  <br />• هاست و دامنه: محل میزبانی سایت و آدرس اینترنتی آن.
                  <br />• درگاه پرداخت (رمزارزی): جهت واریز و برداشت امن کاربران.
                  <br />• پشتیبانی فنی: برای حفظ عملکرد پایدار و رفع مشکلات احتمالی.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  آیا برای استفاده از خدمات بت‌پنل نیاز به دانش برنامه‌نویسی دارم؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  خیر، هیچ نیازی نیست!<br />
                  بت‌پنل تمام مراحل فنی را برای شما انجام می‌دهد. پنل مدیریتی ما کاملاً کاربرپسند طراحی شده و شما فقط با چند کلیک می‌توانید سایت خود را مدیریت کنید.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  امنیت اطلاعات کاربران و تراکنش‌ها در بت‌پنل چگونه تأمین می‌شود؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  امنیت در بت‌پنل اولویت شماره یک ماست.<br />
                  تمام داده‌ها و تراکنش‌ها با استفاده از رمزنگاری SSL و پروتکل‌های امنیتی پیشرفته محافظت می‌شوند. درگاه‌های رمزارزی نیز امنیت و حریم خصوصی بیشتری برای کاربران فراهم می‌کنند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  آیا می‌توانم ظاهر و امکانات سایت خود را شخصی‌سازی کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  بله. در بت‌پنل شما می‌توانید رنگ‌بندی، لوگو، بنرها، تم و حتی برخی بازی‌ها را مطابق برند خود تغییر دهید. هدف ما ساخت سایتی است که کاملاً هویت منحصربه‌فرد شما را منعکس کند.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  درآمدزایی از سایت شرط‌بندی چگونه است و چقدر می‌توانم کسب کنم؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  درآمد شما از طریق سود بازی‌ها (House Edge) و کمیسیون شرط‌بندی‌های ورزشی به‌دست می‌آید.<br />
                  میزان سود بستگی به عوامل زیر دارد:
                  <br />• تعداد کاربران فعال
                  <br />• کیفیت بازاریابی و جذب کاربر
                  <br />• تنوع بازی‌ها و امکانات
                  <br />• مدیریت ریسک و ضرایب<br />
                  اپراتورهای فعال در بت‌پنل معمولاً درآمدهای دلاری پایداری را تجربه می‌کنند. ابزارهای گزارش‌دهی ما نیز کمک می‌کنند تا عملکرد خود را بهینه و سودتان را حداکثر کنید.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-xl px-6">
                <AccordionTrigger className="text-lg hover:text-cyan-400 transition-colors text-right">
                  آیا بت‌پنل پشتیبانی فنی ارائه می‌دهد؟
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed text-right">
                  قطعاً. تیم فنی ما به‌صورت ۲۴/۷ آماده پاسخگویی است تا هرگونه مشکل یا سؤال شما را در کوتاه‌ترین زمان ممکن برطرف کند.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - ✅ value حذف شد، فقط عنوان و آیکون نمایش داده می‌شوند */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 bg-gradient-to-l from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ارتباط با ما
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              برای مشاوره، همکاری یا دریافت اطلاعات بیشتر، از راه‌های زیر با ما در تماس باشید:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: Mail, 
                label: 'ایمیل', 
                gradient: 'from-cyan-500 to-blue-500',
                href: 'mailto:alekmarketingdirector@gmail.com'
              },
              { 
                icon: MessageCircle, 
                label: 'واتس‌اپ', 
                gradient: 'from-green-500 to-emerald-500',
                href: 'https://wa.me/14582725244'
              },
              { 
                icon: Send, 
                label: 'تلگرام', 
                gradient: 'from-blue-500 to-purple-500',
                href: 'https://t.me/tmplus_sahra'
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="block"
              >
                <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 p-8 text-center group hover:border-cyan-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg mb-2 text-gray-300">{contact.label}</h3>
                  {/* ❌ مقدار value حذف شد */}
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 mb-6">هلدینگ پلاس با بیش از ۸ سال تجربه در توسعه پلتفرم‌های بازی و پیش‌بینی ورزشی، زیرساختی مطمئن و حرفه‌ای برای همکاری با سلبریتی‌ها و برندهای مطرح فراهم کرده است.</p>
            <p className="text-gray-500 mb-6">اگر به دنبال ورود حرفه‌ای به دنیای سرگرمی آنلاین و کسب درآمد دلاری هستید، بت‌پنل مسیر آماده شماست.</p>
            <p className="text-gray-500 mb-6">© 2025 بت‌پنل — تمامی حقوق محفوظ است.</p>
            <div className="flex items-center justify-center gap-6">
              {['LinkedIn', 'Instagram', 'Telegram'].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-white text-sm">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
