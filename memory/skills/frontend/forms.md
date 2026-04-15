# Форми, Валідація та Типізація

## Загальне правило
Всі форми в проєкті (як в адмінці, так і на клієнтській стороні) мають працювати за єдиною уніфікованою логікою:

1. **react-hook-form** - Використовується для управління станом форми (`useForm`).
2. **zod** - Використовується для строгої валідації (`z.object(...)`).
3. **shadcn/ui Form** - Використовується для рендеру полів (`<Form>`, `<FormField>`, `<FormControl>`, `<FormMessage>`).

## Структура
- **Схеми:** Всі `zod`-схеми мають створюватися в директорії `lib/schemas/index.ts` (або відповідних підфайлах).
- **Типи:** Типи для форм генеруються автоматично через `z.infer<typeof schema>` безпосередньо в файлах схем і потім ре-експортуються в `lib/types/index.ts` (для глобального імпорту).

## Приклад використання

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { consultationSchema, type ConsultationFormValues } from '@lib/schemas';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@components/ui/form';

const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { name: '', phone: '' }
});

// ...
<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
     <FormField control={form.control} name="name" render={...} />
  </form>
</Form>
```

Ця логіка роботи є обов'язковою та незмінною, допоки не надійдуть інші побажання від Босса.
