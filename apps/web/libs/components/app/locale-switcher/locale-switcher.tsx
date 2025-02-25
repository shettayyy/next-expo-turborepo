import { useLocale, useTranslations } from 'next-intl';

import LocaleSwitcherSelect from './locale-switcher-select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en'),
        },
        {
          value: 'hi',
          label: t('hi'),
        },
        {
          value: 'hi-en',
          label: t('hi-en'),
        },
      ]}
      label={t('label')}
    />
  );
}
