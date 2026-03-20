import { useState } from "react";
import {
  Download,
  Shield,
  Zap,
  MessageCircle,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Waves,
  Smile,
  Lock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1923] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#0d1520] border-b border-[#1a2a3a] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center">
              <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">AQWA</h1>
              <p className="text-xs text-[#7ca3bf] hidden sm:block">Мессенджер для повседневной жизни</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#7ca3bf] hover:text-white hover:bg-[#1a2a3a]">
              О нас
            </Button>
            <Button className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:opacity-90 text-white px-6 py-2 rounded-lg text-sm font-medium">
              Скачать AQWA
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#7ca3bf] hover:text-white hover:bg-[#1a2a3a] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#1a2a3a]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#7ca3bf] hover:text-white hover:bg-[#1a2a3a] justify-start">
                О нас
              </Button>
              <Button className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:opacity-90 text-white px-6 py-2 rounded-lg text-sm font-medium">
                Скачать AQWA
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле мессенджера */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#0a1118] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#1a2a3a] rounded-full"></div>
          {["🏠", "👥", "💬", "⭐"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#0f1923] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#00b4d8] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#0d1520] flex flex-col`}
          >
            <div className="p-4 border-b border-[#1a2a3a] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">AQWA</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#7ca3bf] hover:text-white hover:bg-[#1a2a3a] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#4a7a9b] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Чаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "новости", "мемы", "помощь"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#4a7a9b] hover:text-[#c9dde8] hover:bg-[#1a2a3a] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#4a7a9b] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Общий звонок", "Семья"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#4a7a9b] hover:text-[#c9dde8] hover:bg-[#1a2a3a] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#0a1118] flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей</div>
                <div className="text-[#7ca3bf] text-xs truncate">@alex_aqwa</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#1a2a3a]">
                  <Mic className="w-4 h-4 text-[#7ca3bf]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#1a2a3a]">
                  <Settings className="w-4 h-4 text-[#7ca3bf]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#0f1923] border-b border-[#1a2a3a] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#4a7a9b] hover:text-[#c9dde8] hover:bg-[#1a2a3a] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#4a7a9b]" />
              <span className="text-white font-semibold">общий</span>
              <div className="w-px h-6 bg-[#1a2a3a] mx-2 hidden sm:block"></div>
              <span className="text-[#4a7a9b] text-sm hidden sm:block">Общайся легко и свободно с AQWA</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ca3bf] cursor-pointer hover:text-[#c9dde8]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ca3bf] cursor-pointer hover:text-[#c9dde8]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#7ca3bf] cursor-pointer hover:text-[#c9dde8]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Приветственное сообщение от бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center flex-shrink-0">
                  <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">AQWA</span>
                    <span className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white text-xs px-1 rounded">ПРИЛОЖЕНИЕ</span>
                    <span className="text-[#4a7a9b] text-xs hidden sm:inline">Сегодня в 09:00</span>
                  </div>
                  <div className="text-[#c9dde8] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в AQWA!</strong> Мессенджер, созданный для живого общения — с семьёй, друзьями и коллегами.
                    </p>
                    <div className="bg-[#0d1520] border-l-4 border-[#00b4d8] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет AQWA:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#7ca3bf]">
                        <li>💬 Мгновенные сообщения и групповые чаты</li>
                        <li>📞 Голосовые и видео звонки в HD-качестве</li>
                        <li>🔒 Сквозное шифрование всех переписок</li>
                        <li>📁 Обмен файлами, фото и видео</li>
                        <li>🌐 Работает на всех устройствах</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мария</span>
                    <span className="text-[#4a7a9b] text-xs hidden sm:inline">Сегодня в 09:05</span>
                  </div>
                  <div className="text-[#c9dde8] mb-3 text-sm sm:text-base">
                    Наконец нормальный мессенджер! AQWA такой быстрый 🔥
                  </div>

                  {/* Демо карточка профиля */}
                  <div className="bg-[#0d1520] border border-[#1a2a3a] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#00b4d8] to-[#0077b6] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0d1520] bg-[#0f1923] overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0d1520] rounded-full flex items-center justify-center">
                              <span className="text-lg sm:text-2xl">М</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#0d1520] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Мария</h3>
                        <div className="flex items-center gap-2 text-[#7ca3bf] text-xs sm:text-sm">
                          <span>@masha_forever</span>
                          <span>·</span>
                          <span className="text-[#3ba55c]">В сети</span>
                        </div>
                      </div>

                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#0f1923] rounded-lg p-2 sm:p-3">
                          <div className="flex items-center gap-2 text-[#c9dde8] text-xs sm:text-sm">
                            <Smile className="w-4 h-4 text-[#00b4d8]" />
                            <span>Живу, общаюсь, радуюсь ☀️</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex border-b border-[#1a2a3a] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#4a7a9b] text-xs sm:text-sm font-medium hover:text-[#c9dde8]">
                          Обо мне
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#00b4d8]">
                          Активность
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[#4a7a9b] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>Сейчас</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#0f1923] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-lg flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">AQWA Messenger</div>
                            <div className="text-[#c9dde8] text-xs sm:text-sm mb-1">Пишет в общем чате</div>
                            <div className="text-[#7ca3bf] text-xs sm:text-sm mb-2">Мобильное приложение</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">Онлайн</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ещё одно сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван</span>
                    <span className="text-[#4a7a9b] text-xs hidden sm:inline">Сегодня в 09:10</span>
                  </div>
                  <div className="text-[#c9dde8] text-sm sm:text-base">
                    AQWA лучше всего подходит для семейного чата — безопасно и удобно 👌
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#0d1520] border border-[#1a2a3a] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#00b4d8]" />
                  Начни общаться с AQWA
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Скачай AQWA</h3>
                    <p className="text-[#7ca3bf] text-xs sm:text-sm">Доступно для iOS, Android, Windows и macOS</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай аккаунт</h3>
                    <p className="text-[#7ca3bf] text-xs sm:text-sm">Регистрация за 30 секунд — только номер телефона</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Пригласи близких</h3>
                    <p className="text-[#7ca3bf] text-xs sm:text-sm">Поделись ссылкой — друзья подключатся мгновенно</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:opacity-90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm font-medium">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать AQWA
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#1a2a3a] text-[#7ca3bf] hover:bg-[#1a2a3a] hover:border-[#00b4d8] px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm font-medium bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Попробовать в браузере
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#0d1520] border border-[#1a2a3a] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему выбирают AQWA?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Молниеносная скорость",
                      desc: "Сообщения доставляются мгновенно, даже на слабом интернете",
                    },
                    {
                      icon: <Lock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Полная безопасность",
                      desc: "Сквозное шифрование — никто не читает ваши сообщения",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Всегда на связи",
                      desc: "Синхронизация на всех устройствах в реальном времени",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Без рекламы",
                      desc: "Никакой слежки и надоедливой рекламы — только общение",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#0f1923] transition-colors"
                    >
                      <div className="text-[#00b4d8] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#7ca3bf] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#1a2a3a] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-[#4a7a9b] text-xs sm:text-sm">Напишите сообщение в #общий...</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#0d1520] p-4">
            <div className="mb-4">
              <h3 className="text-[#4a7a9b] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 4</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мария",
                    status: "Пишет сообщение...",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                  },
                  { name: "Иван", status: "В сети", avatar: "И", color: "from-green-500 to-teal-500" },
                  { name: "Алексей", status: "Слушает музыку 🎵", avatar: "А", color: "from-[#00b4d8] to-[#0077b6]" },
                  { name: "Светлана", status: "В видеозвонке", avatar: "С", color: "from-orange-500 to-red-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#0f1923] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#0d1520] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#7ca3bf] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
