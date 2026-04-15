const fs = require('fs');
let log = fs.readFileSync('wiki/notes/log.md', 'utf8');

const newEntry = `
## [2026-04-14] SEO & Forms | React Hook Form & Zod, PWA, Sitemap
- **Що зроблено:** 
  - Форми на сайті переведені на суворий Zod + React Hook Form (Contacts, Checkout).
  - Схеми та типи винесені у \`lib/schemas\` та \`lib/types\`.
  - Моделі \`Lead\` розділено на \`Order\` та \`Consultation\`. Відповідно оновлено адмін-панель.
  - Усі таблиці адмін-панелі отримали клікабельні посилання для швидкого переходу.
  - SEO оптимізація: 404, error boundaries, \`manifest.ts\`, \`robots.ts\`, \`sitemap.ts\`.
  - On-Demand Revalidation: Після змін в адмінці автоматично викликається \`revalidatePath\` для \`sitemap.xml\` та динамічних сторінок замість ISR-таймерів.
  - \`generateMetadata\` для динамічного SEO на кожній сторінці товару/категорії.
- **Конвенції:** Обов'язкове використання єдиного стандарту форм. Додано \`[[React Hook Form & Zod]]\` та \`[[SEO & Metadata]]\` у Вікі.
- **Git Hash:** \`8b4ec76\`
`;

log = log.replace('# Log\n', '# Log\n' + newEntry);
fs.writeFileSync('wiki/notes/log.md', log);
