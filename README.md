<div align="center">

# 💻 Helper31 — Personal Developer Portfolio

**Современный, быстрый и интерактивный сайт-визитка Full-stack & Python разработчика**

[![Website Status](https://img.shields.io/badge/Website-Online-00e5a0?style=for-the-badge&logo=google-chrome&logoColor=white)](https://helper31.ru)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Helper31/helper31.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#-стек-технологий)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#-стек-технологий)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#-стек-технологий)
[![GitHub API](https://img.shields.io/badge/GitHub_API-V3-bd34fe?style=for-the-badge&logo=github&logoColor=white)](#-интеграция-с-github-api)

<br>

[**🌐 Открыть сайт (helper31.ru)**](https://helper31.ru) • [**⚡ Зеркало GitHub Pages**](https://helper31.github.io) • [**🤖 Telegram автора**](https://t.me/Helper31)

</div>

---

## 🌟 О проекте

**helper31.github.io** — это персональный сайт-портфолио, разработанный для демонстрации навыков в веб-разработке и программировании на **Python**. Сайт построен на чистых веб-технологиях без тяжелых фреймворков, что обеспечивает мгновенную загрузку, плавную анимацию и максимальную производительность.

Главная особенность проекта — **автоматическая синхронизация с GitHub API**. Список проектов не зашит статично в HTML: сайт сам обращается к GitHub, получает актуальные публичные репозитории, сортирует их по дате обновления и выводит в виде стильных интерактивных карточек.

---

## ✨ Ключевые возможности

### 🎨 Дизайн и UI/UX (Glassmorphism & Cyber Aesthetics)
* **Тёмная тема (Dark Neo-Glass):** Глубокий темный фон (`#050508`) со стеклянными полупрозрачными панелями, мягкими границами и свечением.
* **Анимированные неоновые сферы:** Динамические фоновые орбы (фиолетовый, бирюзовый, розовый), плавно перемещающиеся на заднем плане с эффектом `blur(80px)`.
* **Цифровой шум (Noise Overlay):** Тонкая текстура шума для придания интерфейсу глубины и кинематографичности.
* **Плавная микроанимация:** Эффекты наведения, трансформации карточек и свечение акцентных кнопок.

### ⚡ Интерактивность и JavaScript-модули
* **Эффект печатной машинки (Typewriter):** Динамическая смена фраз в заголовке (*«Full-stack разработчик»*, *«Web & Python Developer»*, *«Создаю цифровые продукты»*) с анимированным курсором.
* **Автоматический лоадер GitHub-проектов:** Асинхронная загрузка (`async/await` + `fetch`) актуальных репозиториев пользователя через REST API GitHub v3.
* **Smart-фильтрация проектов:** Мгновенное переключение между всеми проектами и проектами на **Python** одним кликом. При нажатии на блок услуг *«Программирование на Python»* страница плавно скроллится к проектам и автоматически включает нужный фильтр.
* **Копирование контактов по клику:** Удобный UX-паттерн — при клике на номер телефона или Email данные копируются в буфер обмена с мгновенным визуальным подтверждением (*«Скопировано!»*).
* **Intersection Observer API:** Плавное появление элементов при прокрутке страницы.

---

## 🛠 Стек технологий

| Технология | Назначение |
| :--- | :--- |
| **HTML5** | Семантическая структура, адаптивная разметка и доступность (`aria-label`, `role`) |
| **CSS3** | Кастомные CSS-переменные (`--accent-cyan`, `--glass-border`), Flexbox/CSS Grid, `@keyframes` анимации, `backdrop-filter` |
| **Vanilla JavaScript (ES6+)** | Асинхронные запросы (`Fetch API`), работа с DOM, `IntersectionObserver`, `Clipboard API` |
| **GitHub REST API v3** | Получение информации о репозиториях (название, описание, язык, звёзды, ссылки, дата обновления) |
| **GitHub Pages & CNAME** | Хостинг и привязка пользовательского домена **helper31.ru** |

---

## 📂 Структура репозитория

```text
helper31.github.io/
│
├── index.html       # Главная страница (разметка, структура секций)
├── style.css        # Стилизация (Glassmorphism, анимации сфер, адаптив)
├── script.js        # Логика (Typewriter, GitHub API, фильтры, буфер обмена)
├── CNAME            # Настройка кастомного домена (helper31.ru)
├── github.svg       # Векторный значок GitHub
└── telegram.svg     # Векторный значок Telegram
